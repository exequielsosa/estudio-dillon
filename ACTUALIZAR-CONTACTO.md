# 🔧 Guía Rápida: Actualizar Datos de Contacto

## 📞 Información a Reemplazar

Actualmente, todos los archivos SEO tienen datos placeholder que debes reemplazar con tu información real:

```javascript
// DATOS ACTUALES (PLACEHOLDER):
telephone: "+54-11-XXXX-XXXX"
email: "info@estudio-dillon.com.ar"
```

---

## 📝 Archivos a Editar

Debes actualizar los siguientes 7 archivos en la carpeta `components/seo/`:

1. `seoHome.js`
2. `seoContactos.js`
3. `seoImpuestos.js`
4. `seoMonotributo.js`
5. `seoSueldos.js`
6. `seoTramites.js`
7. `seoVencimientos.js`

---

## 🎯 Método Rápido: Buscar y Reemplazar

### En VS Code:

1. **Abrir búsqueda global**: `Ctrl + Shift + F` (Windows) o `Cmd + Shift + F` (Mac)

2. **Buscar**: `+54-11-XXXX-XXXX`

3. **Reemplazar con**: Tu teléfono real, por ejemplo: `+54-11-4567-8900`

4. **Click en "Replace All"**

5. **Repetir para el email**:
   - Buscar: `info@estudio-dillon.com.ar`
   - Reemplazar: Tu email real

---

## 📋 Ejemplo Completo

### Antes:
```javascript
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Estudio Contable Dillon",
  telephone: "+54-11-XXXX-XXXX",  // ← Cambiar esto
  email: "info@estudio-dillon.com.ar",  // ← Cambiar esto
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
    postalCode: "C1000",  // ← Cambiar si sabes el código postal exacto
  }
}
```

### Después (ejemplo):
```javascript
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Estudio Contable Dillon",
  telephone: "+54-11-4567-8900",  // ✅ Tu teléfono real
  email: "contacto@estudio-dillon.com.ar",  // ✅ Tu email real
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Corrientes 1234, Piso 5",  // ✅ OPCIONAL: Tu dirección
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
    postalCode: "C1043AAZ",  // ✅ Tu código postal real
  }
}
```

---

## 🏢 Agregar Dirección Completa (Opcional pero Recomendado)

Si tienes una oficina física, agregar la dirección completa mejora el SEO local.

### Buscar esta línea en `seoHome.js`:

```javascript
address: {
  "@type": "PostalAddress",
  addressLocality: "Ciudad Autónoma de Buenos Aires",
```

### Agregar ANTES de `addressLocality`:

```javascript
address: {
  "@type": "PostalAddress",
  streetAddress: "Tu Calle y Número, Piso/Depto",  // ← Agregar esta línea
  addressLocality: "Ciudad Autónoma de Buenos Aires",
```

---

## 📍 Ejemplo con Dirección Real

```javascript
address: {
  "@type": "PostalAddress",
  streetAddress: "Av. Corrientes 1234, Piso 5, Oficina 12",
  addressLocality: "Ciudad Autónoma de Buenos Aires",
  addressRegion: "Buenos Aires",
  addressCountry: "AR",
  postalCode: "C1043AAZ",
},
```

---

## 🕐 Horarios de Atención (Opcional)

Si quieres cambiar los horarios predeterminados (9:00-18:00), edita en `seoHome.js`:

```javascript
openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",  // ← Cambiar horario de apertura
    closes: "18:00",  // ← Cambiar horario de cierre
  },
],
```

### Si atiendes sábados:

```javascript
openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "10:00",
    closes: "14:00",
  },
],
```

---

## 🌐 Redes Sociales

Ya están configuradas en todos los archivos, pero verifica que sean correctas:

```javascript
sameAs: [
  "https://www.linkedin.com/in/maria-eugenia-dillon/",  // ← Verificar
  "https://twitter.com/maugexxiv",  // ← Verificar
],
```

Si tienes otras redes sociales, agrégalas:

```javascript
sameAs: [
  "https://www.linkedin.com/in/maria-eugenia-dillon/",
  "https://twitter.com/maugexxiv",
  "https://www.instagram.com/estudiodillon/",  // ← Agregar
  "https://www.facebook.com/estudiodillon/",  // ← Agregar
],
```

---

## ✅ Verificación Final

Después de actualizar los datos, verifica:

1. **Sin errores**: `npm run build`
2. **Schema válido**: https://validator.schema.org/
3. **Teléfono clickeable** en móviles
4. **Email correcto** en formulario de contacto

---

## 🚫 Errores Comunes a Evitar

❌ **NO uses espacios en el teléfono**: `+54 11 1234 5678`  
✅ **USA guiones o sin espacios**: `+54-11-1234-5678` o `+541112345678`

❌ **NO uses mayúsculas en email**: `CONTACTO@ESTUDIO.COM`  
✅ **USA minúsculas**: `contacto@estudio-dillon.com.ar`

❌ **NO pongas el teléfono sin código de país**  
✅ **USA formato internacional**: `+54-11-XXXX-XXXX`

---

## 📞 Formato de Teléfono Recomendado

```
+54-11-1234-5678     ✅ Recomendado
+54 11 1234 5678     ✅ También válido
541112345678         ✅ Sin espacios
(011) 1234-5678      ❌ Evitar paréntesis
11-1234-5678         ❌ Falta código de país
```

---

## 💾 Guardar Cambios

1. **Editar archivos** con la información real
2. **Guardar todos** (`Ctrl + S`)
3. **Compilar**: `npm run build`
4. **Verificar** que no hay errores
5. **Deploy** al servidor

---

## 🎯 Resumen Express

```bash
# 1. Buscar y reemplazar teléfono
Buscar: +54-11-XXXX-XXXX
Reemplazar: +54-11-TU-TELEFONO

# 2. Buscar y reemplazar email
Buscar: info@estudio-dillon.com.ar
Reemplazar: tu-email@estudio-dillon.com.ar

# 3. (Opcional) Agregar dirección
Editar: components/seo/seoHome.js
Agregar: streetAddress: "Tu Dirección Completa"

# 4. Verificar
npm run build
```

---

**¡Listo!** Con estos cambios, tu SEO estará 100% completo. 🎉
