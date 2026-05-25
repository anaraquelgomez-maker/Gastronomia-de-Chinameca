/* ═══════════════════════════════════════
   SABORES DE CHINAMECA — script.js
   Manipulación del DOM y validación de formularios
═══════════════════════════════════════ */

/* ── 1. AÑO DINÁMICO EN FOOTER ── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ══════════════════════════════════
   2. NAVBAR: efecto scroll + hamburguesa
══════════════════════════════════ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Efecto de scroll — cambia fondo del navbar al bajar
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menú hamburguesa — abre/cierra con classList
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ══════════════════════════════════
   3. VALIDACIÓN DE FORMULARIO
══════════════════════════════════ */
const form       = document.getElementById('reservaForm');
const successMsg = document.getElementById('formSuccess');

// Regex
const REGEX_EMAIL = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const REGEX_TEL   = /^[267]\d{3}[-\s]?\d{4}$/; // formato SV: 7000-0000

// Mostrar error en un campo
function showError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById('error-' + fieldId);
  field.classList.add('invalid');
  field.classList.remove('valid');
  if (error) error.textContent = msg;
}

// Limpiar error de un campo
function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById('error-' + fieldId);
  field.classList.remove('invalid');
  field.classList.add('valid');
  if (error) error.textContent = '';
}

// Limpiar al corregir (input event)
['nombre', 'email', 'telefono', 'personas', 'mensaje'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('input', () => {
    if (el.value.trim() !== '') {
      el.classList.remove('invalid');
      const err = document.getElementById('error-' + id);
      if (err) err.textContent = '';
    }
  });
});

// Validar todos los campos y devolver true si son válidos
function validarFormulario() {
  let valido = true;

  // Nombre
  const nombre = document.getElementById('nombre').value.trim();
  if (nombre.length < 3) {
    showError('nombre', 'Ingresa tu nombre completo (mínimo 3 caracteres).');
    valido = false;
  } else {
    clearError('nombre');
  }

  // Email
  const email = document.getElementById('email').value.trim();
  if (!REGEX_EMAIL.test(email)) {
    showError('email', 'Ingresa un correo electrónico válido (ej: nombre@gmail.com).');
    valido = false;
  } else {
    clearError('email');
  }

  // Teléfono
  const telefono = document.getElementById('telefono').value.trim();
  if (!REGEX_TEL.test(telefono)) {
    showError('telefono', 'Ingresa un número válido de El Salvador (ej: 7000-0000).');
    valido = false;
  } else {
    clearError('telefono');
  }

  // Personas (select)
  const personas = document.getElementById('personas').value;
  if (!personas) {
    showError('personas', 'Selecciona el número de personas.');
    valido = false;
  } else {
    clearError('personas');
  }

  // Mensaje
  const mensaje = document.getElementById('mensaje').value.trim();
  if (mensaje.length < 10) {
    showError('mensaje', 'Escribe al menos 10 caracteres en tu mensaje.');
    valido = false;
  } else {
    clearError('mensaje');
  }

  return valido;
}

// Submit del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.classList.remove('visible');

  if (validarFormulario()) {
    // Éxito: mostrar mensaje y limpiar form
    successMsg.classList.add('visible');
    form.reset();

    // Quitar clases "valid" de todos los campos
    ['nombre', 'email', 'telefono', 'personas', 'mensaje'].forEach(id => {
      document.getElementById(id).classList.remove('valid', 'invalid');
    });

    // Scroll al mensaje de éxito
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Ocultar después de 6 segundos
    setTimeout(() => successMsg.classList.remove('visible'), 6000);
  }
});

/* ══════════════════════════════════
   4. ANIMACIÓN DE ENTRADA — Intersection Observer
   (Tarjetas aparecen al hacer scroll)
══════════════════════════════════ */
const animElements = document.querySelectorAll('.plato-card, .info-card, .nosotros-grid, .contacto-wrap');

// Estilos iniciales (invisible)
animElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger: pequeño delay por índice
      const delay = Array.from(animElements).indexOf(entry.target) % 3 * 100;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animElements.forEach(el => observer.observe(el));
