# Implementación de la sección `/noticias`

Sistema automatizado de generación de noticias contables/impositivas/económicas usando Groq AI + RSS de medios argentinos, ejecutándose 3 veces por semana vía GitHub Actions.

---

## Arquitectura

```
[GitHub Action Lun/Mié/Vie 11am UTC]
       ↓
[scripts/generate-noticias.js] → lee RSS, filtra con Groq, genera artículo SEO
       ↓
[POST /api/noticias/create] → autenticado por X-API-Key
       ↓
[Supabase: tabla `noticias`]
       ↑
[pages/noticias/index.js + [slug].js] → frontend con SSR
```

---

## Setup manual (lo tenés que hacer vos)

### Paso 1 — Crear proyecto Supabase

1. Andá a https://supabase.com/dashboard y creá cuenta o iniciá sesión.
2. Click **"New project"**.
3. Datos:
   - Nombre: `estudio-dillon`
   - Database password: genera una segura (guardala — no la vas a necesitar para el código pero sí para acceder a SQL editor desde la UI).
   - Region: **South America (São Paulo)** — más cercano para latencia desde Argentina.
   - Plan: **Free** alcanza sobrado.
4. Esperá ~2 minutos a que se cree.

### Paso 2 — Crear tabla `noticias`

En el dashboard del proyecto:

1. Ir a **SQL Editor** (icono `</>` en sidebar).
2. Click **"New query"**.
3. Pegar este SQL y ejecutar (botón **Run**):

```sql
-- Tabla de noticias generadas automáticamente
CREATE TABLE noticias (
  id TEXT PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  slug TEXT UNIQUE NOT NULL,
  contenido TEXT NOT NULL,
  categoria TEXT,
  tags TEXT[] DEFAULT '{}',
  imagen_url TEXT,
  imagen_alt TEXT,
  fecha_publicacion DATE DEFAULT CURRENT_DATE,
  fuente_url TEXT,
  is_automated BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para queries comunes
CREATE INDEX noticias_fecha_idx ON noticias (fecha_publicacion DESC);
CREATE INDEX noticias_categoria_idx ON noticias (categoria);
CREATE INDEX noticias_slug_idx ON noticias (slug);

-- Row Level Security: lectura pública, escritura solo con service_key
ALTER TABLE noticias ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lectura pública de noticias publicadas"
  ON noticias FOR SELECT
  USING (TRUE);

-- (Las inserciones se hacen con la service_key que bypassea RLS, así que
-- no hace falta política de INSERT pública.)
```

### Paso 3 — Obtener las credenciales

Una vez creada la tabla:

1. En sidebar de Supabase ir a **Settings** → **API**.
2. Copiar:
   - **Project URL** (algo como `https://abcdefg.supabase.co`)
   - **anon public** key (la que es segura para el cliente)
   - **service_role** key (es secreta — solo se usa en server/GitHub Actions)

### Paso 4 — Obtener API key de Groq

1. Andá a https://console.groq.com/keys
2. Crear cuenta gratis si no tenés.
3. Click **"Create API Key"** → copialo.
4. **Free tier alcanza sobrado** para 3 ejecuciones/semana (~15 generaciones/mes con margen).

### Paso 5 — Generar un secreto para autenticar el script con el endpoint

Es un string random que solo el script y la API conocen. Cualquier random de 32+ caracteres sirve. Ejemplo desde PowerShell:

```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 48 | ForEach-Object {[char]$_})
```

Te tira algo como `kF8mP2xQ9vL3nR7tY1wU5sZ4bC6dE0gH...`. Guardalo, es la `NOTICIAS_API_KEY`.

### Paso 6 — Configurar variables de entorno en Vercel

En el dashboard de Vercel del proyecto `estudio-dillon` → **Settings** → **Environment Variables**:

| Nombre | Valor | Environments |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | (Project URL del paso 3) | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | (anon public del paso 3) | Production, Preview, Development |
| `SUPABASE_SERVICE_KEY` | (service_role del paso 3) | Production |
| `NOTICIAS_API_KEY` | (string del paso 5) | Production |

> ⚠️ El `SUPABASE_SERVICE_KEY` solo va en **Production** porque tiene permisos totales. NO ponerlo en Preview o Development.

### Paso 7 — Configurar secrets en GitHub

En el repo de GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

Crear estos secrets (mismos valores que arriba):

| Secret name | Valor |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | (Project URL) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | (anon public) |
| `SUPABASE_SERVICE_KEY` | (service_role) |
| `NOTICIAS_API_KEY` | (string random del paso 5) |
| `NOTICIAS_API_URL` | `https://www.estudio-dillon.com.ar/api/noticias/create` |
| `GROQ_API_KEY` | (la de Groq del paso 4) |

### Paso 8 — Crear `.env.local` para desarrollo local (opcional)

Si querés probar el script localmente antes de que corra el GitHub Action:

Crear `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_KEY=eyJhbGciOi...
NOTICIAS_API_KEY=kF8mP2xQ9vL3nR7tY1wU5sZ4bC6dE0gH...
NOTICIAS_API_URL=http://localhost:3000/api/noticias/create
GROQ_API_KEY=gsk_xxxxxxxxxx
```

> El archivo `.env.local` ya está en `.gitignore`, así que no se va a subir al repo.

### Paso 9 — Instalar dependencias

Después de hacer pull del código nuevo:

```bash
yarn install
```

Esto va a agregar `@supabase/supabase-js`, `groq-sdk`, `rss-parser` y `dotenv`.

### Paso 10 — Primera prueba

Una vez todo configurado:

**Opción A: probar localmente** (rápido, no consume cuota de GitHub Actions)

```bash
node scripts/generate-noticias.js
```

> Necesitás tener el dev server corriendo (`yarn dev`) si `NOTICIAS_API_URL` apunta a localhost.

**Opción B: trigger manual del GitHub Action**

1. GitHub → **Actions** tab → **Generate Noticias Estudio Dillon**.
2. Click **"Run workflow"** → **"Run workflow"** (en main/master).
3. Esperar 1-2 minutos. Ver los logs.

Si todo OK, verás en Supabase → **Table editor** → **noticias** una fila nueva.

---

## Cronograma de ejecución

| Día | Hora UTC | Hora Argentina | Feeds que consume |
|---|---|---|---|
| **Lunes** | 11:00 | 08:00 | El Cronista + iProfesional + Infobae Economía |
| **Miércoles** | 11:00 | 08:00 | Ámbito + El Cronista + Página12 Economía |
| **Viernes** | 11:00 | 08:00 | Infobae Economía + iProfesional + El Cronista |

Cada ejecución intenta generar **1 noticia** por feed (3 noticias por día). Si Groq filtra muchos por irrelevancia, puede generar menos.

---

## Categorías disponibles

El generador clasifica cada noticia en una de estas categorías:

- `impuestos` — IVA, Ganancias, Bienes Personales
- `monotributo` — Recategorización, exclusiones, AFIP
- `sueldos-laboral` — Cargas sociales, paritarias, ART
- `pymes` — Gestión empresarial, financiamiento, MiPyME
- `economia` — Inflación, dólar, contexto general
- `vencimientos` — Calendario AFIP, prórrogas
- `actualidad` — Cambios normativos generales

---

## Cómo agregar una noticia manualmente

Si querés publicar una noticia escrita a mano (no automatizada):

1. Ir a Supabase → **Table editor** → **noticias** → **"Insert row"**.
2. Llenar campos. Mínimo requerido: `id`, `titulo`, `slug`, `contenido`.
3. Setear `is_automated = false` para diferenciar.

El `id` puede ser cualquier string único (ej: `manual-2026-05-17-aumento-iva`).

---

## Troubleshooting

### "401 Unauthorized" al ejecutar el script
- El `NOTICIAS_API_KEY` del script no coincide con el del endpoint.
- Verificar que las dos variables tengan el mismo valor (Vercel env + GitHub secret).

### "Duplicate post" / código 409
- El generador detectó que ya hay una noticia con el mismo `slug`. Es seguro ignorarlo.

### Groq devuelve "rate limit exceeded"
- Free tier tiene límites. Si pasa, esperar 1 hora.
- Si se vuelve recurrente, considerar upgrade a Groq paid o reducir frecuencia.

### Sin noticias relevantes después del filtro
- El filtro de Groq descartó todas como "no relevantes para el público contable".
- Es normal en días con feed pobre. Próxima ejecución generará.

### El GitHub Action no se dispara
- Verificar que el workflow esté en `master`/`main` (no en branch).
- Verificar que el repo no esté pausado por inactividad (GitHub pausa Actions de repos sin commits en 60+ días).

---

## Costos esperados

| Servicio | Plan | Costo |
|---|---|---|
| Supabase | Free | $0 (500MB DB + 5GB bandwidth, alcanza sobrado) |
| Groq | Free | $0 (~14400 tokens/min) |
| GitHub Actions | Free | $0 (2000 min/mes en repo público) |
| Vercel | Free | $0 (hobby plan, ya estás ahí) |
| **Total** | | **$0/mes** |

---

## Próximos pasos opcionales (a futuro)

- [ ] Agregar paginación en `/noticias` si hay más de 30 noticias.
- [ ] Filtros por categoría en el frontend.
- [ ] Newsletter por email con las noticias semanales (con Resend o similar).
- [ ] RSS feed propio de las noticias generadas (para que otros se suscriban).
- [ ] Sitemap dinámico de noticias individuales (`/noticias/[slug]` en sitemap.xml).
