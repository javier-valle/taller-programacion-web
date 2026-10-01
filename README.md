<div align="center">

<img src="./readme-assets/banner.svg" alt="La Casa del Sabor — Landing page restaurante gourmet" width="100%" />

<br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Sin_dependencias-22e6a8?style=for-the-badge" alt="Sin dependencias" />
<img src="https://img.shields.io/badge/UTP-Taller_Web-b44dff?style=for-the-badge" alt="UTP Taller de Programación Web" />

<br><br>

**Landing page de restaurante gourmet — dark mode, Space Grotesk y layout fluido sin `max-width`.**

🔗 **[Ver demo online](https://htmlpreview.github.io/?https://raw.githubusercontent.com/javier-valle/taller-programacion-web/main/taller-programacion-web/index.html)**

</div>

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 📑 Contenido

| | | |
| :-- | :-- | :-- |
| [Características](#-características) | [Demo rápida](#-demo-rápida) | [Cómo funciona](#-cómo-funciona) |
| [Estructura](#-estructura) | [Evaluación](#-evaluación) | [Créditos y licencia](#-créditos) |

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 🍽️ Qué es

**La Casa del Sabor** es la landing page de un restaurante gourmet, desarrollada como proyecto para el curso **Taller de Programación Web (UTP)**.

Diseñada por **Javier Valle** con dark mode, tipografía **Space Grotesk**, layout fluido sin `max-width`, animaciones de scroll reveal y sistema de design tokens.

> [!NOTE]
> Proyecto académico — estado: **terminado / en evaluación**. Sin dependencias: solo HTML + CSS + JS vanilla.

<div align="center">
<img src="./readme-assets/carousel.svg" alt="Destacados: dark premium, scroll reveal, reserva real, SEO y accesibilidad" width="700" />
</div>

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## ✨ Características

<table>
<tr>
<td width="33%" align="center" valign="top"><b>HTML semántico</b><br><sub>meta description, Open Graph, Twitter Card, canonical, viewport, favicon, <code>lang="es"</code></sub></td>
<td width="33%" align="center" valign="top"><b>CSS modular</b><br><sub><code>base.css</code> tokens + reset · <code>layout.css</code> estructura + nav · <code>components.css</code> cards, tablas, form</sub></td>
<td width="33%" align="center" valign="top"><b>JS modular</b><br><sub><code>interaction.js</code> · <code>reveal.js</code> · <code>form.js</code> · <code>media.js</code> · <code>main.js</code> loader</sub></td>
</tr>
<tr>
<td width="33%" align="center" valign="top"><b>Layout fluido</b><br><sub>sin <code>max-width</code> fijo, Grid + <code>clamp()</code>, responsive con <code>minmax()</code></sub></td>
<td width="33%" align="center" valign="top"><b>SVG inline</b><br><sub>todos los íconos en SVG con <code>stroke="currentColor"</code>, sin emojis en la UI</sub></td>
<td width="33%" align="center" valign="top"><b>Scroll reveal</b><br><sub><code>IntersectionObserver</code>, <code>fade-up/down/left/right/scale-in</code> + stagger, respeta <code>prefers-reduced-motion</code></sub></td>
</tr>
<tr>
<td width="33%" align="center" valign="top"><b>Navbar inteligente</b><br><sub>transparente → glassmorphism al scrollear, hamburguesa responsive con focus trap y Escape</sub></td>
<td width="33%" align="center" valign="top"><b>Hero secuencial</b><br><sub>entrada escalonada tag → título → descripción → CTA</sub></td>
<td width="33%" align="center" valign="top"><b>Reserva funcional</b><br><sub>formulario con validación JS, shake, estados inválidos y success temporal</sub></td>
</tr>
</table>

<table>
<tr>
<td width="50%" align="center" valign="top"><b>Chef + Multimedia</b><br><sub>Sección Nuestro Chef (foto, bio, badges de especialidades, premios) · Experiencia Visual con video YouTube, 3 tarjetas (música ambiente, Chef's Table, maridaje) + estadísticas · Audio ambiente vía CDN externo (Pixabay Night Jazz)</sub></td>
<td width="50%" align="center" valign="top"><b>SEO + Accesibilidad</b><br><sub>Open Graph, Twitter Card, canonical · <code>aria-label</code>, <code>aria-expanded</code>, <code>role="alert"</code>, <code>:focus-visible</code>, contraste AA · FAQ con <code>&lt;details&gt;</code> nativo y chevron rotatorio</sub></td>
</tr>
</table>

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 🚀 Demo rápida

**Requisitos:** solo un navegador moderno. No requiere instalación ni dependencias.

**Online:**

🔗 [https://htmlpreview.github.io/?https://raw.githubusercontent.com/javier-valle/taller-programacion-web/main/taller-programacion-web/index.html](https://htmlpreview.github.io/?https://raw.githubusercontent.com/javier-valle/taller-programacion-web/main/taller-programacion-web/index.html)

**Local (3 pasos):**

<div align="center">
<img src="./readme-assets/terminal.svg" alt="Servir el proyecto en local con python http.server" width="700" />
</div>

```bash
cd taller-programacion-web
python -m http.server 8000
# abrir http://localhost:8000/index.html
```

> [!TIP]
> También puedes abrir `taller-programacion-web/index.html` con doble clic — funciona sin servidor. Usa el servidor local si el video/audio externo no carga por políticas del navegador.

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 🧭 Cómo funciona

<div align="center">
<img src="./readme-assets/flow.svg" alt="Flujo: Descubrir, explorar carta, reservar mesa, vivir experiencia" width="100%" />
</div>

```mermaid
flowchart LR
    A[index.html] --> B[base.css<br/>tokens + reset]
    A --> C[layout.css<br/>nav + hero + grid]
    A --> D[components.css<br/>cards + form + FAQ]
    A --> E[main.js<br/>loader]
    E --> F[interaction.js<br/>nav + scroll]
    E --> G[reveal.js<br/>animaciones]
    E --> H[form.js<br/>reserva]
    E --> I[media.js<br/>multimedia]
```

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 📁 Estructura

<details>
<summary><b>Árbol del proyecto</b></summary>

```text
taller-programacion-web/
├── index.html
├── README.md
├── readme-assets/
│   ├── banner.svg
│   ├── divider.svg
│   ├── flow.svg
│   ├── carousel.svg
│   └── terminal.svg
└── taller-programacion-web/
    ├── index.html
    └── assets/
        ├── css/
        │   ├── base.css         (variables, reset, tipografía, utilities)
        │   ├── layout.css       (nav, hero, grid, secciones, contenedores)
        │   └── components.css   (cards, tablas, botones, formulario, FAQ, multimedia)
        ├── js/
        │   ├── interaction.js   (nav, mobile, scroll, parallax, progress, whatsapp, highlight)
        │   ├── reveal.js        (animaciones de scroll reveal)
        │   ├── form.js          (validación y feedback del formulario)
        │   ├── media.js         (pausa de loops animados)
        │   └── main.js          (loader / inicializador)
        ├── images/
        │   └── lcs-logo.svg
        └── video/
            └── (videos locales)
```

</details>

## 🛠️ Especificaciones

| Campo | Valor |
| :-- | :-- |
| Proyecto | La Casa del Sabor — landing restaurante gourmet |
| Stack | HTML5 semántico · CSS3 modular · JavaScript vanilla |
| Tipografía | Space Grotesk |
| Tema | Dark mode, design tokens, sin `max-width` |
| Multimedia | Video YouTube embebido + audio CDN externo (Pixabay Night Jazz) |
| Versión | [TODO: definir versión, ej. 1.0.0] |
| Compatibilidad | Navegadores modernos (Chrome, Edge, Firefox, Safari) |
| Autor | Javier Valle (U24265511) — Taller de Programación Web, UTP |

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 📊 Evaluación

| Criterio | Puntaje |
| :-- | :-- |
| Estructura y uso de HTML | 4 |
| Aplicación de CSS | 3 |
| Estructura de la página | 3 |
| Uso de formularios | 3 |
| Implementación de tablas | 3 |
| Integración de multimedia | 4 |
| **Total** | **20** |

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 🆘 Soporte

[TODO: agregar medio de contacto — ej. email universitario o link a issues del repo].

- Reportar un problema: abre un issue en el repositorio con captura + navegador usado.
- Duda del curso: contactar al autor vía canal de la UTP.

## 🗺️ Roadmap

- [ ] [TODO: confirmar pendientes — ej. galería de fotos propia, modo claro, despliegue en GitHub Pages]

## 🤝 Contributing

Proyecto académico individual — no se aceptan contribuciones externas por ahora. Para cambios grandes, abrir un issue primero.

## 📌 Estado del proyecto

Académico / terminado para evaluación del curso. Sin mantenimiento activo previsto salvo ajustes solicitados por el docente.

<img src="./readme-assets/divider.svg" width="100%" height="6" alt="" />

## 👨‍🍳 Créditos

Proyecto desarrollado por **Javier Valle (U24265511)** para el curso Taller de Programación Web — UTP.

Multimedia externa: video YouTube embebido + audio ambiente vía CDN de Pixabay (Night Jazz).

## 📄 Licencia

[TODO: definir licencia — si es solo académico, ej. "Uso académico, todos los derechos reservados" o agregar archivo `LICENSE` MIT].

<div align="center">
<sub>La Casa del Sabor · UTP Taller de Programación Web · Hecho con HTML + CSS + JS vanilla</sub>
</div>
