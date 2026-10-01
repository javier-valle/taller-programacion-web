# Registro de cambios — La Casa del Sabor

Historial de avances del proyecto para el curso **Taller de Programación Web (UTP)**.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

## [Avance 2] — En curso

Consigna: *Diseño Web con CSS Avanzado y Diseño Responsivo* — versión funcional con
personalización estética, diseño adaptativo y maquetación avanzada.
Fecha límite: [TODO: confirmar fecha límite del Avance 2].

### Verificado en el código ✅

- **Tipografía personalizada:** Space Grotesk vía Google Fonts
  (`index.html`, líneas 28-30: `fonts.googleapis.com` + `fonts.gstatic.com`).
- **Íconos y vectores:** 35 SVG inline propios con `stroke="currentColor"`, sin librerías externas.
- **Animaciones y transiciones CSS:** scroll reveal (`IntersectionObserver`),
  hero secuencial, navbar glassmorphism, FAQ con chevron rotatorio, `prefers-reduced-motion`.
- **Diseño responsivo:** Grid + `clamp()` + `minmax()`, imágenes flexibles y `@media queries`.
- **Flexbox / Grid:** maquetación con ambos (navegación, tarjetas, galerías, footer).
- **Presentación y organización:** CSS modular (`base` / `layout` / `components`),
  JS modular (`interaction` / `reveal` / `form` / `media` / `main`).

### Cambios aplicados (2026-10-01)

- **Favicon roto corregido:** `index.html` pedía `assets/images/favicon.ico`
  (inexistente, daba 404); ahora apunta a `assets/images/lcs-logo.svg`.
- **`theme-color` agregado** (`#0a0705`) para la barra del navegador móvil.
- **SEO social completado:** se agregó `og:image` + `twitter:image` con una
  foto ya usada en la galería (antes `og:image:alt` estaba huérfano).
- **Video accesible y diferido:** `iframe` con `loading="lazy"`,
  `allowfullscreen` y `allow` explícito (se retiró `frameborder`, obsoleto).

### Pendiente ⏳

- **Evidencia de DevTools (lo hace el autor):** capturas o video breve con
  Chrome/Edge DevTools (protocolo de revisión en `docs/DECISIONES-DISENO.pdf`,
  sección 6). Agregar a `entrega-avance2.zip` antes de enviar.
- **Documento PDF ✅:** `docs/DECISIONES-DISENO.pdf` (fuente: `docs/decisiones-diseno.html`).
- **ZIP de entrega ✅ (base):** `entrega-avance2.zip` (sitio + PDF).
  Re-comprimir tras agregar las capturas.
- **Puntajes de la rúbrica:** el documento del Avance 2 llega incompleto;
  solo se confirma el total **/20**. [TODO: confirmar puntaje por criterio].

Rúbrica (descripciones oficiales, puntajes por confirmar salvo total):

| Criterio | Descripción | Estado |
| :-- | :-- | :-- |
| Tipografía personalizada | Aplicación correcta y coherente de fuentes externas | ✅ en código |
| Uso de íconos y vectores | Integración funcional y visual de íconos o gráficos SVG | ✅ en código |
| Animaciones y transiciones CSS | Inclusión de efectos suaves y bien aplicados | ✅ en código |
| Diseño responsivo | Adaptabilidad a distintos dispositivos y tamaños | ✅ en código |
| Maquetación con Flexbox/Grid | Estructura del contenido clara y moderna | ✅ en código |
| Uso de herramientas del navegador | Evidencia de diagnóstico, depuración y optimización | ⏳ capturas/video |
| Presentación y organización general | Limpieza del código, estructura de carpetas, comentarios | ✅ en código |
| **Total** | | **/20** |

## [Avance 1] — 2025-04-21 ✅

Consigna: *revisión de Avance de Proyecto* — HTML y CSS: estructura básica,
formularios, tablas y multimedia. Presentado en clase el **21/04/2025**.

### Cumplido

1. **Estructura básica HTML:** estructura correcta, meta tags básicos
   (description, Open Graph, Twitter Card, canonical, viewport, favicon),
   etiquetas de texto, enlaces y saltos de línea.
2. **Aplicación de CSS:** sintaxis, selectores, colores, fuentes y espaciados.
3. **Página responsiva:** encabezado con navegación, cuerpo estructurado,
   pie de página con info adicional.
4. **Formularios:** reserva de mesa funcional con estilos CSS y validaciones básicas.
5. **Tablas:** tablas de datos con encabezados, contenido estructurado y estilos CSS.
6. **Multimedia:** imágenes optimizadas y responsivas, video y audio con controles,
   pruebas en diferentes dispositivos.

Rúbrica oficial (20 puntos):

| Criterio | Puntaje |
| :-- | :-- |
| Estructura y uso de HTML | 4 |
| Aplicación de CSS | 3 |
| Estructura de la página | 3 |
| Uso de formularios | 3 |
| Implementación de tablas | 3 |
| Integración de multimedia | 4 |
| **Total** | **20** |

> [!NOTE]
> Formato de entrega del Avance 1 (repo o ZIP + capturas multi-dispositivo).
> En este repo no hay carpeta de capturas — [TODO: verificar si las capturas
> se entregaron solo en clase o si hay que agregarlas al repo].
