# Acciones SEO pendientes (fuera de código)

Estas son las 4 acciones que **vos** tenés que ejecutar para que el SEO realmente despegue. El código ya está optimizado, pero sin esto Google no indexa por más fixes técnicos que hagamos.

Ordenadas por impacto.

---

## 1. Google Search Console (lo más importante)

**Por qué:** si nunca diste de alta el sitio en Search Console, Google no recibió la señal "indexáme". Esto explica casi totalmente que el sitio no aparezca en búsquedas en 4 años.

### Paso a paso

1. Abrí https://search.google.com/search-console e iniciá sesión con la cuenta Google que va a administrar el SEO (idealmente la cuenta del negocio).
2. Click en **"Agregar propiedad"** → elegí tipo **"Prefijo de URL"** → poné: `https://www.estudio-dillon.com.ar`
3. **Verificación**: Google te da varias opciones. La más simple es **etiqueta HTML (meta tag)**:
   - Te muestra algo como: `<meta name="google-site-verification" content="ABC123XYZ..." />`
   - **Copiá solo el `content="..."`** (el token) y pasámelo. Lo agrego al `_document.js` y te avisó cuando esté deployado.
   - Volvés a Search Console y hacés click en **"Verificar"**.
4. Una vez verificado, en el menú lateral entrá a **Sitemaps**:
   - En el campo poné: `sitemap.xml`
   - Click **"Enviar"**.
   - Vas a ver "Estado: Correcto" en unos minutos.
5. Inspección manual de URLs (acelera la indexación):
   - En el buscador de arriba pegá: `https://www.estudio-dillon.com.ar/`
   - Espera unos segundos. Cuando dice "URL no está en Google", click en **"Solicitar indexación"**.
   - Repetí para: `/impuestos`, `/sueldos`, `/monotributo`, `/tramites`, `/vencimientos`, `/contacto`.
   - Google te puede tardar de 1 día a 2 semanas en indexar.

### Qué mirar después
- A los 7 días, en **Rendimiento** vas a empezar a ver impresiones y clicks por búsquedas.
- En **Páginas → Indexación de páginas** verificás qué páginas indexó.

---

## 2. Imágenes faltantes (CTR en redes)

**Por qué:** hoy si alguien comparte el link del sitio en WhatsApp/Facebook/LinkedIn, no aparece preview con imagen. Eso baja drásticamente el CTR. Todos los `og:image` del sitio apuntan a `/assets/og-image.jpg` que **no existe**.

### Lista exacta

Todos van en `public/` (o `public/assets/` donde se indica).

| Archivo | Ruta | Dimensiones | Para qué |
|---|---|---|---|
| `og-image.jpg` | `public/assets/` | **1200×630px** | Preview en redes sociales |
| `logo.png` | `public/assets/` | **512×512px** (cuadrado) | Schema.org del negocio |
| `favicon-16x16.png` | `public/` | **16×16px** | Favicon chiquito |
| `favicon-32x32.png` | `public/` | **32×32px** | Favicon estándar |
| `apple-touch-icon.png` | `public/` | **180×180px** | iOS al guardar en pantalla de inicio |
| `android-chrome-192x192.png` | `public/` | **192×192px** | Android PWA |
| `android-chrome-512x512.png` | `public/` | **512×512px** | Android PWA grande |

### Herramientas recomendadas

**Para favicons y app icons** (genera todo el set de una):
- https://realfavicongenerator.net/
- Subí `public/logoDillon2.png` o `public/estudio_dillon_logo.png`.
- Configura: tema color `#1e40af` (azul corporativo), background blanco.
- Descargá el ZIP, copiá los archivos a `public/` con los nombres exactos de la tabla.

**Para og-image.jpg** (la más importante):
- https://canva.com (template "Facebook Cover" o búsqueda "OpenGraph 1200x630").
- Diseño sugerido: logo del estudio + texto "Estudio Contable Dillon" + tagline "Servicios contables integrales en Argentina". Fondo color corporativo.
- Exportá como JPG, comprimí en https://tinypng.com (target <200KB).
- Guardalo como `public/assets/og-image.jpg`.

**Para logo.png Schema:**
- Puede ser el `estudio_dillon_logo.png` actual escalado a 512×512px cuadrado (con fondo blanco/transparente si necesario).

### Verificación post-creación

Cuando deployes, validá los previews:
- https://developers.facebook.com/tools/debug/ (Facebook + WhatsApp + Instagram)
- https://cards-dev.twitter.com/validator (Twitter/X)
- https://www.linkedin.com/post-inspector/ (LinkedIn)

---

## 3. Google My Business (búsquedas locales)

**Por qué:** para queries tipo "estudio contable Buenos Aires", "contador CABA", "monotributo cerca mío", Google prioriza negocios con perfil de **Google Business Profile** verificado, mucho más que páginas web normales. Es decisivo para SEO local.

### Paso a paso

1. https://business.google.com → "Administrar ahora".
2. Datos:
   - Nombre del negocio: **Estudio Contable Dillon**
   - Categoría principal: **Contador** (o "Servicio de contabilidad")
   - Categorías adicionales: Asesor fiscal, Asesor tributario
   - Dirección física (la real, no PO Box).
   - Teléfono: **+54 11 5895-9825**
   - Sitio web: `https://www.estudio-dillon.com.ar`
   - Horarios de atención.
3. **Verificación**: Google te manda una postal con código a la dirección (5-14 días) o, si está disponible para tu zona, verificación por video/llamada.
4. Una vez verificado:
   - Subí 5-10 **fotos** (oficina, logo, equipo). Negocios con fotos tienen 42% más clicks.
   - Llenale la sección "Descripción": 750 caracteres usando palabras clave naturales (contador, impuestos, monotributo, sueldos, etc.).
   - Servicios: agregá uno por cada página del sitio (Impuestos, Sueldos, Monotributo, Trámites).
5. **Pedile reviews a clientes existentes.** Los negocios con 20+ reviews 4.5⭐ aparecen primero en "Local Pack" de Google. Es probablemente la palanca más fuerte para SEO local.

---

## 4. Backlinks de directorios profesionales

**Por qué:** sin enlaces entrantes de otros sitios, Google considera al dominio "huérfano". Necesitamos referencias desde sitios de autoridad.

### Lista priorizada (todos gratis)

1. **Consejo Profesional de Ciencias Económicas de CABA** — https://www.consejo.org.ar/
   - Si María Eugenia Dillon está matriculada (debería estarlo), tiene derecho a perfil público con link al sitio. Es el backlink de mayor autoridad para un contador en CABA.
2. **LinkedIn** — perfil de María Eugenia Dillon
   - En "Sitio web" en la sección de contacto, poner `https://www.estudio-dillon.com.ar`.
   - El Schema.org del sitio ya enlaza a `https://www.linkedin.com/in/maria-eugenia-dillon/` — verificar que ese perfil existe y enlaza al sitio (reciprocidad).
3. **Páginas Amarillas Argentina** — https://www.paginasamarillas.com.ar/
   - Registrá el negocio gratis. Categoría: Contadores.
4. **Cylex Argentina** — https://www.cylex.com.ar/
   - Directorio empresarial, registro gratis.
5. **Hotfrog Argentina** — https://www.hotfrog.com.ar/
   - Idem, gratis.
6. **Argentina.gob.ar AFIP - Directorio de profesionales certificados** (si aplica)
   - Si Dillon es Agente de Retención o tiene certificaciones AFIP especiales, puede figurar en directorios oficiales.

Cada uno suma 1 punto de autoridad de dominio. Con 10-15 buenos backlinks, el sitio empieza a aparecer en búsquedas competitivas.

---

## 5. Mantenimiento mensual

Una vez todo lo anterior arrancado:

- **Cada mes**, revisar Search Console:
  - Sección **Rendimiento**: queries por las que estás apareciendo, posición promedio.
  - Sección **Cobertura/Páginas**: errores de indexación, páginas excluidas.
- **Actualizar fechas**: el sitemap se actualiza solo (es dinámico). Pero contenido de páginas (Vencimientos, FAQ) actualizar al menos cada 3 meses.
- **Responder reviews de Google My Business** dentro de 48hs.

---

## Checklist final

Cuando hayas completado todo, marcá:

- [ ] Search Console verificado y sitemap enviado
- [ ] Indexación manual solicitada de las 7 páginas principales
- [ ] og-image.jpg y favicons cargados en `public/`
- [ ] Preview validado en Facebook Debugger
- [ ] Google My Business verificado y con fotos
- [ ] Mínimo 5 reviews en GMB
- [ ] Perfil del Consejo Profesional con link al sitio
- [ ] Perfiles en al menos 3 directorios (Páginas Amarillas, Cylex, Hotfrog)

**Cuando termines los puntos 1 y 2, el sitio debería empezar a aparecer en búsquedas en 2-4 semanas.** Los puntos 3 y 4 mejoran el posicionamiento gradualmente a lo largo de 2-6 meses.
