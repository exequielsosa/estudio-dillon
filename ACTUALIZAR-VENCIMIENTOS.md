# Actualizar el calendario de vencimientos (una vez por año)

La herramienta de `/vencimientos` ("¿Qué vence este mes?") lee las fechas de un archivo por año:

```
data/vencimientos/2026.json
data/vencimientos/2027.json   ← el que hay que agregar cada año
```

ARCA no tiene una API pública del calendario. Las fechas salen de su **agenda oficial de vencimientos**, con un script que lee la agenda mes por mes y arma el archivo solo. **Nunca se cargan fechas a mano ni desde sitios de terceros.**

---

## Cuándo

| Momento | Qué hacer |
|---|---|
| **Diciembre** (cuando ARCA ya muestra enero del año siguiente) | Generar el archivo del año nuevo. Pasos 1 a 6. |
| **Cuando ARCA publica una prórroga** (ej.: Ganancias anual) | Volver a correr el script del año en curso y reemplazar el archivo. Mismos pasos. |
| **1 de enero sin archivo cargado** | No pasa nada grave: la herramienta muestra "Calendario en preparación" y el botón de contacto. Nunca muestra fechas viejas. |

Tiempo estimado: **15 minutos** más la verificación del estudio.

---

## Pasos

### 1. Abrir la agenda oficial de ARCA
En Chrome: <https://seti.afip.gob.ar/av/seleccionVencimientosSintetica.do>
(No hace falta clave fiscal.)

### 2. Abrir la consola del navegador
`F12` → pestaña **Console**. Si Chrome pide escribir "allow pasting", escribirlo y apretar Enter.

### 3. Pegar el script
Copiar **todo** el contenido de `scripts/vencimientos/extraer-arca.js`, pegarlo en la consola y apretar Enter.

- El año se elige solo: en noviembre y diciembre toma el **año siguiente**; el resto del año, el año en curso.
- Para forzar un año, cambiar la línea `const ANIO = ...` por, por ejemplo, `const ANIO = 2027;`.

Tarda unos 30 segundos. Al terminar muestra una tabla con cuántas fechas encontró por obligación y descarga `2027.json`.

**Referencia (2026):** iva 60 · sicore 72 · f931 36 · autonomos 36 · monotributo 12 · bp_anticipo 15 · ganancias_anticipo 13 · monotributo_recat 2 · ganancias_sociedades_dic 6 · bp_acciones 6 · ganancias_bp_anual 2.
Si alguna da **0** o muy distinto, ARCA cambió algo en la agenda: avisar antes de publicar.

### 4. Completar dos datos a mano en el archivo
Abrir el JSON descargado y completar en `fuente`:
- `actualizadoArca`: la fecha que figura arriba en la agenda ("Información actualizada al …"), en formato `AAAA-MM-DD`.
- `verificadoPor`: el nombre de quien revisó las fechas en el estudio (paso 6).

### 5. Copiar y validar
Copiar el archivo a `data/vencimientos/` y correr:

```bash
yarn vencimientos:validar 2027
```

El validador avisa si falta una obligación, si un mes no tiene todas las terminaciones de CUIT (0 a 9), si hay fechas inválidas o de otro año, o si alguna cae en fin de semana. **Con errores no se publica.**

### 6. Verificación del estudio (obligatoria)
Antes de publicar, alguien del estudio compara **un mes al azar** de cada obligación contra la agenda de ARCA (IVA, Monotributo y F.931 como mínimo) y pone su nombre en `verificadoPor`.

### 7. Publicar
Commit + deploy como siempre. **No hay que tocar código:** la herramienta carga sola todos los archivos `data/vencimientos/<AÑO>.json` (ver `components/vencimientos/datos.js`) y la navegación de meses se extiende al año nuevo. El texto de la página (`/vencimientos`) que dice "2026" se actualiza aparte, en el mismo cambio.

---

## Qué obligaciones incluye la herramienta

| id | Se muestra como | Para quién | Frecuencia |
|---|---|---|---|
| `iva` | IVA · DDJJ mensual y pago | Responsables inscriptos | Mensual, por pares de terminación (0-1, 2-3…) |
| `monotributo` | Monotributo · cuota mensual | Monotributistas | Mensual, todas las terminaciones |
| `monotributo_recat` | Monotributo · recategorización | Monotributistas | Febrero y agosto |
| `f931` | Cargas sociales (F.931) | Empleadores | Mensual, grupos 0-3 / 4-6 / 7-9 |
| `autonomos` | Autónomos · aportes | Trabajadores autónomos | Mensual, grupos 0-3 / 4-6 / 7-9 |
| `sicore` | Retenciones y percepciones (SICORE) | Agentes de retención | Mensual: DDJJ + pago a cuenta 1ª quincena |
| `ganancias_anticipo` | Ganancias personas humanas · anticipo | Personas humanas | 5 anticipos por año |
| `bp_anticipo` | Bienes Personales · anticipo | Personas humanas | 5 anticipos por año |
| `ganancias_bp_anual` | Ganancias y Bienes Personales · DDJJ anual | Personas humanas | Anual |
| `bp_acciones` | Bienes Personales acciones y participaciones | Sociedades | Anual (junio) |
| `ganancias_sociedades_dic` | Ganancias sociedades · DDJJ anual | Sociedades con cierre en diciembre | Anual (mayo) |

**Ojo con los grupos de CUIT:** no todas las obligaciones se agrupan igual. IVA va de a pares, pero F.931, autónomos, SICORE y anticipos van en grupos 0-3, 4-6 y 7-9. El script toma los grupos tal como los publica ARCA; no hay que "completarlos".

**Convenio Multilateral e Ingresos Brutos** no están en la herramienta: no son de ARCA (los fija la Comisión Arbitral y cada provincia). Siguen explicados en el texto de la página.

---

## Formato del archivo

```json
{
  "anio": 2026,
  "fuente": {
    "nombre": "ARCA — Agenda de vencimientos (agenda sintética)",
    "url": "https://seti.afip.gob.ar/av/seleccionVencimientosSintetica.do",
    "actualizadoArca": "2026-10-24",
    "consultado": "2026-10-25",
    "verificadoPor": null
  },
  "obligaciones": [
    {
      "id": "iva",
      "nombre": "IVA",
      "detalle": "Declaración jurada mensual y pago",
      "quienes": "Responsables inscriptos",
      "seccion": "iva",
      "vencimientos": [
        { "fecha": "2026-01-19", "cuit": [0, 1], "periodo": "Diciembre/2025", "accion": "Presentación y pago" }
      ]
    }
  ]
}
```

- `seccion`: el ancla de la página donde se explica esa obligación (`#iva`, `#mono`, `#cas`…). La herramienta enlaza ahí.
- `cuit`: las terminaciones de CUIT a las que aplica esa fecha.
- `periodo`: el período que se declara o paga, tal como lo escribe ARCA.

---

## Si el script deja de funcionar

ARCA puede cambiar el diseño de la agenda. Síntomas: la tabla del paso 3 muestra 0 fechas en varias obligaciones, o el validador da muchos errores. En ese caso **no publicar** y revisar el script (la función `leerMes` es la que lee la página; las `REGLAS` eligen qué obligaciones tomar).
