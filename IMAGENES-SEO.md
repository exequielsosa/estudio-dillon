# Instrucciones para Imágenes SEO y PWA

## Imágenes Requeridas para SEO Óptimo

Para completar la optimización SEO, necesitas crear y agregar las siguientes imágenes en la carpeta `/public` y `/public/assets`:

### 1. Favicon (Icono del sitio)
- **favicon.ico** - 48x48px (formato ICO)
- **favicon-16x16.png** - 16x16px
- **favicon-32x32.png** - 32x32px
- **apple-touch-icon.png** - 180x180px (para dispositivos Apple)

### 2. Íconos PWA (Progressive Web App)
- **android-chrome-192x192.png** - 192x192px
- **android-chrome-512x512.png** - 512x512px

### 3. Open Graph Image (Redes Sociales)
- **assets/og-image.jpg** - 1200x630px
  - Debe incluir el logo del estudio
  - Texto: "Estudio Contable Dillon"
  - Subtítulo: "Servicios Contables Integrales"
  - Fondo profesional con colores del brand (#1e40af azul)

### 4. Logo
- **assets/logo.png** - 512x512px (transparente)
  - Logo en alta resolución con fondo transparente

## Herramientas Recomendadas

### Para generar Favicons:
- **Favicon.io** - https://favicon.io/
- **RealFaviconGenerator** - https://realfavicongenerator.net/

### Para crear imágenes Open Graph:
- **Canva** - https://www.canva.com/ (plantillas 1200x630)
- **Figma** - https://www.figma.com/
- **Adobe Express** - https://www.adobe.com/express/

### Para redimensionar imágenes:
- **TinyPNG** - https://tinypng.com/ (compresión)
- **Squoosh** - https://squoosh.app/ (optimización)

## Checklist de Imágenes

```
/public/
  ├── favicon.ico ⬜
  ├── favicon-16x16.png ⬜
  ├── favicon-32x32.png ⬜
  ├── apple-touch-icon.png ⬜
  ├── android-chrome-192x192.png ⬜
  ├── android-chrome-512x512.png ⬜
  └── assets/
      ├── og-image.jpg ⬜
      └── logo.png ⬜
```

## Diseño Recomendado para Open Graph

### Especificaciones:
- **Tamaño**: 1200 x 630 píxeles
- **Formato**: JPG o PNG
- **Peso máximo**: 8MB (recomendado < 300KB)
- **Resolución**: 72 DPI
- **Color principal**: #1e40af (azul corporativo)

### Contenido sugerido:
1. Logo del Estudio Contable Dillon (esquina superior izquierda)
2. Título grande: "Estudio Contable Dillon"
3. Subtítulo: "Servicios Contables Integrales"
4. Iconos representativos: calculadora, documentos, gráficos
5. Colores profesionales: azul (#1e40af), blanco, gris

## Pasos Post-Generación

1. **Optimizar todas las imágenes** para web (comprimir sin perder calidad)
2. **Subir las imágenes** a las rutas especificadas en `/public`
3. **Verificar** que las rutas en los componentes SEO coincidan
4. **Testear** con:
   - Google Rich Results Test
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

## Validación Final

Después de agregar las imágenes, verifica:

- ✅ Favicon visible en todas las pestañas del navegador
- ✅ Open Graph image aparece al compartir en redes sociales
- ✅ PWA icons se muestran al "Agregar a pantalla de inicio"
- ✅ No hay errores 404 en las rutas de imágenes
- ✅ Imágenes optimizadas (peso < 300KB para OG image)

## Testing Tools

- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
- **Google Rich Results**: https://search.google.com/test/rich-results
- **Schema Validator**: https://validator.schema.org/

---

Una vez tengas todas las imágenes, reemplaza las rutas actuales y el SEO estará 100% optimizado.
