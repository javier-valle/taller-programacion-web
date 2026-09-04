# La Casa del Sabor

Landing page de restaurante gourmet. Proyecto para el curso **Taller de Programación Web**, UTP.

Diseñado por **Javier Valle** — dark mode, tipografía Space Grotesk, layout fluido sin `max-width`, animaciones de scroll reveal y sistema de design tokens.

## Qué incluye

- **HTML semántico**: meta tags (description, Open Graph, Twitter Card, canonical), viewport, favicon, schema JSON-LD (Restaurant + FAQPage).
- **Design System propio**: tokens CSS (colores, radios, sombras, spacing, motion), paleta oscura con acento dorado, radios redondeados.
- **Layout fluido**: sin `max-width` fijo, Grid + `clamp()`, responsive con `minmax()`.
- **SVG inline**: todos los íconos son SVG inline con `stroke="currentColor"` (sin emojis).
- **Scroll reveal**: `IntersectionObserver`, animaciones `fade-up/down/left/right/scale-in` con stagger, respeta `prefers-reduced-motion`.
- **Navbar inteligente**: transparente al inicio, glassmorphism al scrollear, padding reducido, menú hamburguesa responsive con focus trap y Escape.
- **Hero secuencial**: entrada escalonada tag → título → descripción → CTA.
- **Formulario funcional**: reserva de mesa con validación JS + feedback visual (shake, estados inválidos, success temporal).
- **FAQ con `<details>`**: acordeón nativo animado con chevron rotatorio.
- **SEO completo**: schema LocalBusiness/Restaurant, FAQ schema, Open Graph, Twitter Card, canonical, `lang="es"`.
- **Accesibilidad**: `aria-label`, `aria-expanded`, `role="alert"`, `:focus-visible`, contraste AA, `prefers-reduced-motion`.
- **Sección Nuestro Chef**: perfil del chef ejecutivo con foto, biografía, especialidades (badges) y premios.
- **Multimedia**: sección Experiencia Visual con video embebido (YouTube), 3 tarjetas de experiencias (música ambiente, Chef's Table, maridaje de vinos) y estadísticas del restaurante. Audio ambiente vía CDN externo (Pixabay Night Jazz).

## Estructura del proyecto

```
taller-programacion-web/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    ├── images/
    │   ├── lcs-logo.svg
    │   └── favicon.ico
    └── video/
        └── (videos locales)
```

## Cómo verlo

**Online**: [https://htmlpreview.github.io/?https://raw.githubusercontent.com/javier-valle/taller-programacion-web/main/taller-programacion-web/index.html](https://htmlpreview.github.io/?https://raw.githubusercontent.com/javier-valle/taller-programacion-web/main/taller-programacion-web/index.html)

**Local**: Abrir `index.html` en el navegador. No requiere instalación ni dependencias.

## Criterios de evaluación

| Criterio | Puntaje |
|---|---|
| Estructura y uso de HTML | 4 |
| Aplicación de CSS | 3 |
| Estructura de la página | 3 |
| Uso de formularios | 3 |
| Implementación de tablas | 3 |
| Integración de multimedia | 4 |
| **Total** | **20** |

## Autor

Proyecto desarrollado por **Javier Valle** (U24265511) para el curso Taller de Programación Web — UTP.
