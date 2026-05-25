# 🌶 Sabores de Chinameca

Landing page de gastronomía auténtica del municipio de **Chinameca, San Miguel, El Salvador**.

🌐 **URL del sitio:** `https://tu-usuario.github.io/sabores-chinameca`

---

## 📋 Descripción

Proyecto de landing page que promueve la gastronomía tradicional de Chinameca, destacando platos típicos del oriente salvadoreño como pupusas, sopa de pata, yuca con chicharrón, tamales de elote, enchiladas y atol shuco.

---

## 🗂 Estructura del proyecto

```
sabores-chinameca/
├── index.html    # Estructura HTML con todas las secciones
├── styles.css    # Estilos con Flexbox, CSS Grid y responsividad
├── script.js     # JavaScript: DOM, validación y animaciones
└── README.md     # Documentación del proyecto
```

---

## ✅ Secciones incluidas

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Navbar** | Fija con efecto scroll, anclas y menú hamburguesa responsive |
| 2 | **Hero** | Imagen de fondo, título, subtítulo y botón CTA |
| 3 | **Nosotros** | Historia y descripción del negocio con estadísticas |
| 4 | **Servicios** | 6 platos típicos en CSS Grid con hover effects |
| 5 | **Formulario** | Reservaciones con validación completa en JavaScript |
| 6 | **Footer** | Redes sociales, navegación, año dinámico y créditos |

---

## 🛠 Tecnologías

- **HTML5** semántico
- **CSS3**: Flexbox, CSS Grid, variables CSS, transiciones, `@keyframes`
- **JavaScript** (Vanilla): manipulación del DOM, `addEventListener`, `classList`, `querySelector`, `IntersectionObserver`
- **Google Fonts**: Cormorant Garamond + DM Sans

---

## 📱 Responsividad

| Dispositivo | Breakpoint | Comportamiento |
|-------------|-----------|----------------|
| Móvil | `max-width: 600px` | Navbar en columna (hamburguesa), grid en 1 columna |
| Tablet | `max-width: 900px` | Grid en 2 columnas |
| Escritorio | `min-width: 901px` | Layout completo, 3 columnas |

---

## ⚙️ Funcionalidades JavaScript

1. **Navbar con scroll**: cambia de transparente a oscuro al desplazar la página (`scrollY > 60`)
2. **Menú hamburguesa**: abre/cierra menú en móvil con `classList.toggle`
3. **Validación de formulario**:
   - Nombre: mínimo 3 caracteres
   - Email: validación con regex `/^[a-zA-Z0-9._%+\-]+@.../`
   - Teléfono: formato salvadoreño (7000-0000)
   - Personas: campo obligatorio (select)
   - Mensaje: mínimo 10 caracteres
   - Errores se limpian al corregir (`input` event)
   - Mensaje de éxito personalizado al enviar
4. **Animaciones de entrada**: `IntersectionObserver` para revelar tarjetas al hacer scroll

---

## 🚀 Despliegue

Publicado en **GitHub Pages**:
1. Subir archivos al repositorio
2. Settings → Pages → Branch: `main` / `(root)`
3. Guardar y esperar 1-2 minutos

---

## 👩‍💻 Créditos

Proyecto académico — Desarrollo Frontend  
Actividad evaluada — Implementación de interactividad avanzada  
© 2026 Sabores de Chinameca, San Miguel, El Salvador
