# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre el proyecto

Sitio institucional del **Estudio Contable Dillon** (Argentina). Next.js 13 con **Pages Router** (no App Router), JavaScript puro (sin TypeScript), desplegado en Vercel. El idioma del sitio y del contenido es español (`i18n.locales: ["es"]`).

## Comandos

```bash
yarn dev      # servidor de desarrollo en http://localhost:3000
yarn build    # build de producción
yarn start    # servir el build de producción
yarn lint     # next lint (extends next/core-web-vitals)
```

El proyecto usa **Yarn** (hay `yarn.lock`). El `package-lock.json` está obsoleto — no usar npm para instalar.

## Arquitectura

### Routing y composición de layout

- **Pages Router**: cada archivo en [pages/](pages/) es una ruta. Las páginas son componentes simples que **no incluyen** navbar/footer/form — eso lo hace el wrapper global.
- **Layout global** en [pages/_app.js](pages/_app.js): envuelve cada página con [components/layout.js](components/layout.js), que monta `NavBar`, `LayoutBody`, `FormContact`, `CallToActionCard`, `FooterLayout` y el botón flotante de WhatsApp. **Toda página hereda automáticamente el formulario de contacto y el CTA al final** — no agregarlos manualmente en cada página.
- **Document personalizado** [pages/_document.js](pages/_document.js): carga fuentes (Montserrat/Roboto/Secular One/Titillium Web vía Google Fonts), Flowbite CSS/JS por CDN, manifest y favicons.
- Alias de imports: `@/*` resuelve a la raíz del proyecto (ver [jsconfig.json](jsconfig.json)). Ejemplo: `import Layout from "@/components/layout"`.

### Patrón SEO: un componente por página

Cada ruta tiene un componente SEO dedicado en [components/seo/](components/seo/) (`seoHome.js`, `seoImpuestos.js`, `seoMonotributo.js`, `seoSueldos.js`, `seoTramites.js`, `seoVencimientos.js`, `seoContactos.js`) que se importa y se renderiza al inicio del JSX de la página. Cada uno emite:

- `<Head>` con title/description/keywords/canonical específicos de esa ruta,
- meta tags Open Graph + Twitter Card,
- **JSON-LD Schema.org** (`ProfessionalService` en home; `Service` en páginas de servicio; `Article` en vencimientos; `ContactPage` en contacto; `BreadcrumbList` en todas).

Al crear una página nueva: crear también su `seo*.js` siguiendo el mismo patrón (no reusar uno existente con props). Al actualizar año/fechas/datos de contacto, hay que tocar los 7 archivos SEO — ver [ACTUALIZAR-CONTACTO.md](ACTUALIZAR-CONTACTO.md) y [REPORTE-SEO-COMPLETO.md](REPORTE-SEO-COMPLETO.md).

El componente extra [components/seo/FAQSchema.js](components/seo/FAQSchema.js) emite `FAQPage` schema y se usa solo en la home.

### Formulario de contacto → email

Flujo: [components/formContact.js](components/formContact.js) → [lib/api.js](lib/api.js) → POST `/api/contact` → [pages/api/contact.js](pages/api/contact.js) → Nodemailer con Gmail SMTP ([config/nodemailer.js](config/nodemailer.js)).

Variables de entorno requeridas (en `.env`, **gitignored**):
- `EMAIL` — cuenta Gmail emisora
- `EMAIL_PASS` — app password de Gmail (no la contraseña real)
- `EMAIL_TO` — destinatario

El cuerpo del email se arma inline en `generateEmailContent` dentro del handler de la API (no usa [templates/email.html](templates/email.html) — ese archivo parece legacy).

### Analytics

Dos sistemas en paralelo, ambos cargados desde [pages/_app.js](pages/_app.js):

1. **Google Analytics (gtag)**: el helper está en [gatg.js](gatg.js) (sí, el nombre tiene typo — es `gatg.js`, no `gtag.js`). El `GA_TRACKING_ID` está **hardcodeado** ahí, no en `.env`. `pageview` se dispara manualmente en `routeChangeComplete` porque Pages Router no lo hace solo.
2. **Vercel Analytics** vía `<Analytics />` de `@vercel/analytics/react`.

### UI y estilos

- **Tailwind CSS** + **Flowbite** + **flowbite-react**. El `content` de [tailwind.config.js](tailwind.config.js) incluye `node_modules/flowbite*` — necesario para que los estilos de los componentes Flowbite se generen.
- Animaciones con **AOS** (`aos`), inicializado una vez en `_app.js` con `duration: 2000`.
- Estilos globales en [styles/globals.css](styles/globals.css) y específicos del botón flotante en [styles/whatsApp.css](styles/whatsApp.css).
- Fuentes externas vía Google Fonts en `_document.js` (no usa `next/font`).

### Imágenes

`next.config.js` configura formatos AVIF/WebP y tamaños. Las imágenes están en [public/](public/) con variantes `-min` (versiones reducidas para previews). Hay convenciones de nombres legacy (`v24.png`, `ven2024.png`, etc.) — ver [IMAGENES-SEO.md](IMAGENES-SEO.md) para qué imágenes faltan/cuáles son placeholders.

## Convenciones

- **Idioma**: todo el contenido del sitio y los nombres de páginas/rutas están en español (`/impuestos`, `/monotributo`, `/sueldos`, `/tramites`, `/vencimientos`, `/contacto`).
- **Páginas separadas por año** para vencimientos: existen [pages/vencimientos.js](pages/vencimientos.js) y [pages/vencimientos-2023.js](pages/vencimientos-2023.js). Patrón similar en componentes (`taxes.js` / `taxes23.js`, `content.js` / `conten23.js`). Al actualizar el año en curso, se reemplaza el contenido de `vencimientos.js`; las versiones con sufijo de año son archivo histórico.
- No hay TypeScript, no hay tests configurados.

## Documentación SEO existente

- [REPORTE-SEO-COMPLETO.md](REPORTE-SEO-COMPLETO.md) — qué se cambió y por qué en la última pasada SEO.
- [CHECKLIST-SEO.md](CHECKLIST-SEO.md) — verificaciones pendientes post-deploy.
- [ACTUALIZAR-CONTACTO.md](ACTUALIZAR-CONTACTO.md) — cómo reemplazar placeholders de teléfono/email en los 7 archivos SEO.
- [IMAGENES-SEO.md](IMAGENES-SEO.md) — imágenes que hay que generar (og-image.jpg, favicons, etc.).

Si la tarea toca SEO, revisar esos archivos antes de empezar para no duplicar trabajo.

## Estado actual

_(Esta sección se actualiza al cierre de cada sesión con un resumen de lo hecho y lo pendiente.)_

- Último trabajo en curso: ajustes de SEO + Google Analytics (commits recientes en `master`).
- Pendiente conocido: reemplazar placeholders de contacto en `components/seo/*.js` (ver ACTUALIZAR-CONTACTO.md) y generar imágenes faltantes (ver IMAGENES-SEO.md).
