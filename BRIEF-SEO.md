Brief técnico SEO para Claude Code — estudio-dillon.com.ar

Contexto: sitio de un estudio contable argentino (www.estudio-dillon.com.ar, es-AR). GSC 11/4–10/7/2026: 60 clics, 3.980 impresiones, CTR 1,5 %, posición media 6,7. Indexación sana (64/77). Es un sitio de generación de leads: el éxito se mide en consultas de clientes, no en tráfico. Contenido fiscal = YMYL: el E-E-A-T pesa fuerte. Informe completo en INFORME-SEO-estudio-dillon.md.

Instrucción general: verificá cada diagnóstico en el código antes de implementar. Priorizá lo que acerque leads (Tareas 1-3) sobre lo cosmético.


TAREA 1 — Páginas de servicio comerciales (lo que falta para generar leads)

Datos: "estudio contable argentina" posición 26,7; ninguna query comercial ("estudio contable caba", "contador monotributo", "contador pyme") en el top 300. El sitio tiene /monotributo (193 imp, CTR 0,5 %, pos 4,8 — ¡ya rankea!), /tramites, /impuestos, /sueldos, pero con titles institucionales, no comerciales.

Acciones:


Reorientar cada página de servicio a la búsqueda comercial:

/monotributo → title Contador para Monotributistas: alta, recategorización y vencimientos | Estudio Dillon (ya está pos 4,8 — solo el title/desc puede duplicar el CTR de 0,5 %).
/sueldos → Liquidación de Sueldos para PyMEs | Estudio Contable Dillon.
Crear/ajustar páginas: "Estudio contable para PyMEs", "Constitución de sociedades (SAS/SRL)", "Estudio contable online".



Home: title actual Estudio Contable Dillon | Estudio Contable Integral (redundante) → Estudio Contable Dillon | Contadores para PyMEs y Monotributistas — CABA y online. H1 acompañando ("Estudio Contable Dillon" solo el nombre → sumar propuesta de valor).
Cada página de servicio: qué incluye, para quién, FAQ propia (con FAQPage schema), CTA de WhatsApp visible y formulario corto.


TAREA 2 — Sistematizar el motor de noticias normativas

Datos: una sola nota (/noticias/ingresos-brutos-caba-nuevas-alicuotas) = 27 clics, 45 % del total del sitio, CTR 7,2 %, pos 5,7, ganando la query "ley 6948 caba". El sitemap de noticias (69 URLs) se envió el 17/5 y las impresiones crecieron desde entonces. El modelo funciona.

Acciones de código (soporte al modelo editorial):


Template de nota optimizado: title = norma + qué cambia + año (Ley 6948 CABA: nuevas alícuotas de Ingresos Brutos 2026), primer párrafo respondiendo qué/a quién/desde cuándo, bloque "cómo te afecta" + CTA al servicio relacionado.
Firma de autor con contador matriculado (nombre, matrícula CPCECABA/provincia) + schema author (Person) — YMYL.
Article schema con datePublished/dateModified visibles.
Interlinking automático: cada nota linkea a su página de servicio y a /vencimientos cuando aplique.
Fix inmediato: hay dos notas duplicadas del mismo tema — /noticias/convenio-multilateral-prorroga-anticipo-1-2026 y /noticias/convenio-multilateral-prorroga-para-presentar-anticipo-1-2026. Consolidar en una con 301 de la otra.


TAREA 3 — /vencimientos: el asset de visibilidad

Datos: 2.682 imp (67 % del sitio), CTR 0,5 %, pos 6,8. Decenas de queries pos 1-8 con 0 clics (zero-click: la fecha aparece en el snippet). Cluster más grande: "participaciones societarias" (~450 imp repartidas en variantes, varias en pos 1). Title actual: "Vencimientos AFIP 2026".

Acciones:


Title → Vencimientos ARCA (ex AFIP) 2026: calendario completo de impuestos — el organismo se renombró y ya hay queries "arca vencimientos 2026" (pos 2 con clic).
Estructura con anchors por régimen (#monotributo, #f931, #sicore, #iva-diferido, #participaciones-societarias) para sitelinks.
Páginas dedicadas para clusters grandes: /vencimientos/participaciones-societarias-2026 (qué es el régimen, quiénes están obligados, multas por no presentar, fecha, CTA "lo presentamos por vos"). El title vendedor le gana al zero-click porque ofrece más que la fecha.
CTA persistente: "¿Se te pasan los vencimientos? Delegalos" → WhatsApp/contacto.
Datos actualizables: si las fechas están hardcodeadas, mover a un JSON/colección con fecha de última actualización visible.


TAREA 4 — E-E-A-T y señales locales

Verificado: no hay tel: clickeable (solo WhatsApp), no hay dirección física visible, el schema es ProfessionalService duplicado (2 bloques) y sin datos de contacto/área servida.

Acciones:


Consolidar en un solo bloque AccountingService (subtipo correcto) con: name, url, telephone, areaServed (CABA + Buenos Aires + remoto), address si existe oficina física (confirmar con el dueño), sameAs (LinkedIn, GBP).
tel: clickeable en header/footer además del WhatsApp.
Página "Equipo/Nosotros" con contadores, matrículas y experiencia (si no existe).
Deduplicar el ProfessionalService.


TAREA 5 — Higiene (rápida)


GSC → Sitemaps: eliminar el sitemap legacy https://estudio-dillon.com.ar/sitemap.xml (apex, diciembre 2025, desactualizado) — acción manual del dueño.
2 × 404 y 2 redirecciones: identificar y limpiar de sitemap/links internos.
6 "rastreadas sin indexar" y 3 "canonical alternativa": revisar cuáles son (probablemente variantes apex/www o noticias viejas).


Fuera de código (para el dueño — acá está la mitad del valor)


Google Business Profile: para "estudio contable + zona" el map pack aparece antes que los resultados orgánicos. Crear/optimizar el perfil, pedir reseñas a clientes. Es probablemente la acción #1 de todo este brief en impacto sobre leads.
Directorios profesionales: consejo profesional de ciencias económicas, cámaras empresariales, directorios PyME (backlinks actuales: 0).
El motor de noticias requiere disciplina editorial: 1-2 notas por semana pegadas a novedades ARCA/AGIP/ARBA rinde más que cualquier optimización técnica.


Orden sugerido


Tarea 5 (una hora) + fix de notas duplicadas (Tarea 2)
Tarea 3 (title ARCA + anchors: horas; páginas por cluster: 1-2 días)
Tarea 1 (2-3 días — la de mayor impacto en leads)
Tarea 4 (1 día)
Tarea 2 template (1 día) + editorial continuo


Métricas de éxito (GSC + negocio, 4-6 semanas)


"estudio contable argentina" y variantes comerciales: de pos 26,7 → top 10; aparición de queries "contador/estudio contable + servicio" en GSC.
/monotributo: CTR 0,5 % → ≥2 % (ya está pos 4,8).
/vencimientos: CTR 0,5 % → ≥1,5 % con title ARCA + páginas por cluster.
Repetir el caso "ley 6948": ≥1 nota por mes entrando al top 10 de su query.
Negocio: consultas por WhatsApp/formulario atribuibles a orgánico (agregar parámetro de origen al link de WhatsApp si no lo tiene).