
// Animación al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Manejo del formulario de trabaja con nosotros con validaciones y alertas visuales
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('trabaja-form');
  const alertaDiv = document.getElementById('trabaja-alerta');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if(alertaDiv) alertaDiv.textContent = '';
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const telefono = form.telefono.value.trim();
      const mensaje = form.mensaje.value.trim();
      const archivo = form.archivo.files[0];
      const aceptarPolitica = form.aceptarPolitica.checked;
      if(!archivo) {
        alertaDiv.className = 'alerta alerta-error';
        alertaDiv.textContent = '❌ Debes adjuntar tu hoja de vida';
        setTimeout(() => alertaDiv.textContent = '', 4000);
        return;
      }
      if(!aceptarPolitica) {
        alertaDiv.className = 'alerta alerta-error';
        alertaDiv.textContent = '❌ Debes aceptar la política de tratamiento de datos';
        setTimeout(() => alertaDiv.textContent = '', 4000);
        return;
      }
      alertaDiv.className = 'alerta alerta-exito';
      alertaDiv.textContent = '✅ Tu solicitud fue enviada con éxito';
      setTimeout(() => alertaDiv.textContent = '', 4000);
      form.reset();
    });
  }
});
