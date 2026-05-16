# Instrucciones: aplicar patrón visual de imágenes en secciones

Este documento describe cómo replicar el patrón visual ya aplicado en **`pages/impuestos.js`** sobre las páginas restantes: `/sueldos`, `/monotributo`, `/tramites`, `/contacto` y `/` (home).

---

## 1. Patrón visual

Las secciones de servicio alternan entre 4 estados, en este orden cíclico:

| Posición | Tipo |
|---|---|
| 1 | Imagen a la **derecha** |
| 2 | Sin imagen |
| 3 | Imagen a la **izquierda** |
| 4 | Sin imagen |
| 5 | Imagen a la derecha _(reinicia)_ |
| ... | ... |

**Regla mnemotécnica:** `R → N → L → N → R → N → L → N → R → N → L → N → R → ...`

**No se cambia:**
- El primer `<article>` (intro con `<h1>` + subtítulo).
- El `<ServiceMenu />`.
- La sección CTA final (la que tiene `className="cta-card"`).
- La sección FAQ final con el `<FAQAccordion>`.

---

## 2. Componente

Se usa `SectionWithImage` (ya existe en `components/sectionWithImage.js`).

**Props:**

| Prop | Tipo | Descripción |
|---|---|---|
| `image` | string | Ruta de la imagen (ej: `/sueldos-min.jpg`). |
| `alt` | string | Texto alternativo SEO (descriptivo). |
| `imageRight` | boolean | `true` (default) = imagen a la derecha. `false` = imagen a la izquierda. |

**Comportamiento:**
- Desktop (≥1024px): grid de 2/3 texto + 1/3 imagen.
- Mobile: apila vertical (texto arriba, imagen abajo).
- Imagen tiene 80% de alto y queda anclada al borde inferior (deja el espacio del título libre).

---

## 3. Cambios técnicos

### A) Agregar import

En cada archivo de página, agregar al inicio:

```jsx
import SectionWithImage from "@/components/sectionWithImage";
```

### B) Sección SIN imagen (queda como está)

```jsx
<article>
  <h2 id="..." className="section-h">Título</h2>
  <p className="opacity-70 text-base">...</p>
</article>
```

### C) Sección CON imagen a la **derecha**

Reemplazar `<article>` por `<SectionWithImage>` + `imageRight`:

```jsx
<SectionWithImage
  image="/placeholder.jpg"
  alt="Descripción para SEO"
  imageRight
>
  <h2 id="..." className="section-h">Título</h2>
  <p className="opacity-70 text-base">...</p>
</SectionWithImage>
```

### D) Sección CON imagen a la **izquierda**

Igual a C pero con `imageRight={false}`:

```jsx
<SectionWithImage
  image="/placeholder.jpg"
  alt="Descripción para SEO"
  imageRight={false}
>
  <h2 id="..." className="section-h">Título</h2>
  <p className="opacity-70 text-base">...</p>
</SectionWithImage>
```

### E) No olvidar cerrar el tag correcto

Al convertir `<article>` → `<SectionWithImage>`, también hay que cambiar el `</article>` de cierre por `</SectionWithImage>`. Es un error fácil de cometer y el build lo marca con _"Expected corresponding JSX closing tag"_.

---

## 4. Imágenes placeholder por página

Mientras no haya imágenes específicas, usar estas que ya existen en `public/`:

| Página | Placeholder |
|---|---|
| `/sueldos` | `/sueldos-min.jpg` |
| `/monotributo` | `/monotributo.webp` |
| `/tramites` | `/tramites-min.jpg` |
| `/contacto` | `/contactoMini.jpg` |
| `/` (home) | alternar `/impuestos-min.jpg`, `/sueldos-min.jpg`, `/tramites-min.jpg` |

Cuando se generen imágenes específicas (recomendado a futuro), guardarlas en `public/services/<seccion>.jpg` y reemplazar el prop `image=` en cada `<SectionWithImage>`.

---

## 5. Mapeo de secciones por página

### 5.1 `/sueldos` — `pages/sueldos.js`

15 secciones de servicio + 1 CTA (no tocar).

| # | Título | Patrón | Imagen | Alt sugerido |
|---|---|---|---|---|
| 1 | Asesoramiento en liquidación de haberes | **R** | `/sueldos-min.jpg` | Asesoramiento en liquidación de haberes |
| 2 | Incorporación de personal | N | — | — |
| 3 | Alta temprana y registración laboral | **L** | `/sueldos-min.jpg` | Alta temprana y registración laboral |
| 4 | Determinación del convenio colectivo de trabajo | N | — | — |
| 5 | Confección de legajos del personal | **R** | `/sueldos-min.jpg` | Confección de legajos del personal |
| 6 | Administración mensual de personal | N | — | — |
| 7 | Inscripción como empleador | **L** | `/sueldos-min.jpg` | Inscripción como empleador |
| 8 | Liquidación de cargas sociales y SUSS | N | — | — |
| 9 | Recibos de sueldo | **R** | `/sueldos-min.jpg` | Recibos de sueldo |
| 10 | Libro de sueldos y jornales | N | — | — |
| 11 | Impuesto a las Ganancias sobre sueldos | **L** | `/sueldos-min.jpg` | Ganancias sobre sueldos |
| 12 | Beneficios promocionales y reducción de cargas sociales | N | — | — |
| 13 | Egreso de personal y liquidaciones finales | **R** | `/sueldos-min.jpg` | Egreso y liquidaciones finales |
| 14 | Prevención de errores y contingencias laborales | N | — | — |
| 15 | Un servicio claro, profesional y adaptado a cada empresa | **L** | `/sueldos-min.jpg` | Servicio adaptado a cada empresa |
| 16 | Consultá por nuestro servicio de liquidación de sueldos | _(CTA — no tocar)_ | — | — |

---

### 5.2 `/monotributo` — `pages/monotributo.js`

13 secciones de servicio + 1 CTA.

| # | Título | Patrón | Imagen | Alt sugerido |
|---|---|---|---|---|
| 1 | Contador para monotributistas | **R** | `/monotributo.webp` | Contador especializado en monotributo |
| 2 | Alta de monotributo | N | — | — |
| 3 | Recategorización de monotributo | **L** | `/monotributo.webp` | Recategorización de monotributo |
| 4 | Seguimiento online de facturación | N | — | — |
| 5 | Facturación electrónica para monotributistas | **R** | `/monotributo.webp` | Facturación electrónica |
| 6 | Monotributo e Ingresos Brutos | N | — | — |
| 7 | Convenio Multilateral para monotributistas | **L** | `/monotributo.webp` | Convenio Multilateral |
| 8 | Regularización de deuda de monotributo | N | — | — |
| 9 | Prevención de exclusiones del monotributo | **R** | `/monotributo.webp` | Prevención de exclusiones |
| 10 | Baja de monotributo o modificación de datos | N | — | — |
| 11 | Herramientas digitales para gestionar tu monotributo | **L** | `/monotributo.webp` | Herramientas digitales |
| 12 | Cumplimiento de obligaciones fiscales | N | — | — |
| 13 | Servicio claro, simple y personalizado | **R** | `/monotributo.webp` | Servicio personalizado |
| 14 | Consultá por nuestro servicio para monotributistas | _(CTA — no tocar)_ | — | — |

---

### 5.3 `/tramites` — `pages/tramites.js`

19 secciones de servicio + 1 CTA. **Atención:** la sección #12 ("Certificados Contables") es un encabezado introductorio del subgrupo de certificados — sigue el patrón normalmente.

| # | Título | Patrón | Imagen | Alt sugerido |
|---|---|---|---|---|
| 1 | Trámites societarios en IGJ CABA | **R** | `/tramites-min.jpg` | Trámites societarios IGJ |
| 2 | Constitución de sociedades comerciales | N | — | — |
| 3 | Transformación, modificación y disolución de sociedades | **L** | `/tramites-min.jpg` | Transformación y disolución |
| 4 | Modificación de estatutos, autoridades y composición accionaria | N | — | — |
| 5 | Vistas y seguimiento de expedientes ante IGJ | **R** | `/tramites-min.jpg` | Vistas IGJ |
| 6 | Publicaciones legales y Artículo 60 | N | — | — |
| 7 | Libros societarios actualizados | **L** | `/tramites-min.jpg` | Libros societarios |
| 8 | Preparación y conducción de reuniones societarias | N | — | — |
| 9 | Sociedades y sucursales del exterior | **R** | `/tramites-min.jpg` | Sociedades del exterior |
| 10 | Acuerdos societarios entre socios o accionistas | N | — | — |
| 11 | Confección de estatutos y reglamentos | **L** | `/tramites-min.jpg` | Estatutos y reglamentos |
| 12 | Certificados Contables _(encabezado del subgrupo, tiene `!mt-10`)_ | N | — | — |
| 13 | Certificado de ingresos | **R** | `/tramites-min.jpg` | Certificado de ingresos |
| 14 | Certificado de sueldos percibidos | N | — | — |
| 15 | Certificado de ingresos por ventas | **L** | `/tramites-min.jpg` | Certificado de ingresos por ventas |
| 16 | Manifestación de bienes | N | — | — |
| 17 | Certificado de origen lícito de fondos | **R** | `/tramites-min.jpg` | Origen lícito de fondos |
| 18 | Informe sobre cumplimiento de obligaciones impositivas y previsionales | N | — | — |
| 19 | Trámites contables con seguimiento profesional | **L** | `/tramites-min.jpg` | Trámites con seguimiento |
| 20 | Consultá por trámites societarios o certificados contables | _(CTA — no tocar)_ | — | — |

---

### 5.4 `/contacto` — `pages/contacto.js`

5 secciones + 1 CTA.

| # | Título | Patrón | Imagen | Alt sugerido |
|---|---|---|---|---|
| 1 | Asesoramiento contable en Capital Federal | **R** | `/contactoMini.jpg` | Asesoramiento contable CABA |
| 2 | Cómo podemos ayudarte | N | — | — |
| 3 | Atención personalizada | **L** | `/contactoMini.jpg` | Atención personalizada |
| 4 | Consultas para nuevos clientes | N | — | — |
| 5 | Reuniones y entrevistas | **R** | `/contactoMini.jpg` | Reuniones y entrevistas |
| 6 | Comunicate con nosotros | _(CTA — no tocar)_ | — | — |

---

### 5.5 `/` (home) — `pages/index.js`

6 secciones + 1 CTA. Mezclo placeholders distintos para variar visualmente.

| # | Título | Patrón | Imagen | Alt sugerido |
|---|---|---|---|---|
| 1 | Servicios contables e impositivos para personas y empresas | **R** | `/impuestos-min.jpg` | Servicios contables integrales |
| 2 | Asesoramiento para monotributistas | N | — | — |
| 3 | Contadores para responsables inscriptos, profesionales y empresas | **L** | `/sueldos-min.jpg` | Contadores para empresas |
| 4 | Startups, pymes y nuevos negocios | N | — | — |
| 5 | Un estudio contable moderno, cercano y claro | **R** | `/tramites-min.jpg` | Estudio contable moderno |
| 6 | Atención en Capital Federal y asesoramiento online en todo el país | N | — | — |
| 7 | Por qué elegir Estudio Contable Dillon | _(CTA — no tocar)_ | — | — |

---

## 6. Checklist por página

Al terminar cada página, validar:

- [ ] Import de `SectionWithImage` agregado al inicio.
- [ ] Las secciones marcadas como `R` o `L` usan `<SectionWithImage>` con los props correctos.
- [ ] Cada `<SectionWithImage>` cierra con `</SectionWithImage>` (no con `</article>`).
- [ ] Las secciones marcadas como `N` siguen siendo `<article>`.
- [ ] La sección CTA (con `className="cta-card"`) no se modifica.
- [ ] El build pasa sin errores: `yarn build`.

---

## 7. Mejora a futuro: imágenes específicas

Cuando se tengan imágenes específicas por sección, organizarlas así:

```
public/services/
├── sueldos-haberes.jpg
├── sueldos-personal.jpg
├── sueldos-altas.jpg
├── sueldos-legajos.jpg
├── sueldos-empleador.jpg
├── sueldos-recibos.jpg
├── sueldos-ganancias.jpg
├── sueldos-egreso.jpg
├── sueldos-servicio.jpg
├── monotributo-contador.jpg
├── monotributo-recategorizacion.jpg
├── monotributo-facturacion.jpg
├── (etc...)
```

Dimensiones recomendadas: **800×800px** (cuadrada) o **800×600px** (4:3). El componente lo recorta con `object-cover` así que la proporción exacta no es crítica.

Una vez generadas, reemplazar el `image=` de cada `<SectionWithImage>` por la ruta específica (ej: `image="/services/sueldos-haberes.jpg"`).

---

## 8. Si algo sale mal

- **Error JSX "Expected corresponding JSX closing tag"** → Falta cambiar un `</article>` por `</SectionWithImage>` o viceversa.
- **Imagen no aparece** → Verificar que la ruta del prop `image` exista en `public/`.
- **Layout roto en mobile** → Confirmar que no se modificaron las clases `grid-cols-1 lg:grid-cols-3` del componente.
- **Imagen muy alta o muy baja** → Ajustar `lg:h-[80%]` en `components/sectionWithImage.js` al porcentaje deseado.
