function loadComponent(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
}
loadComponent('footer-container', 'components/footer.html');
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

 // Manejo del formulario de contacto moderno con validaciones y alertas visuales
 document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('contacto-form');
   const alertaDiv = document.getElementById('contacto-alerta');
   if(form) {
     form.addEventListener('submit', function(e) {
       e.preventDefault();
       if(alertaDiv) alertaDiv.textContent = '';
       const nombre = form.nombre.value.trim();
       const email = form.email.value.trim();
       const telefono = form.telefono.value.trim();
       const asunto = form.asunto.value.trim();
       const mensaje = form.mensaje.value.trim();
       if(!nombre || !email || !mensaje) {
         alertaDiv.className = 'alerta alerta-error';
         alertaDiv.textContent = '❌ Por favor completa los campos obligatorios';
         setTimeout(() => alertaDiv.textContent = '', 4000);
         return;
       }
       alertaDiv.className = 'alerta alerta-exito';
       alertaDiv.textContent = '✅ Tu mensaje fue enviado con éxito';
       setTimeout(() => alertaDiv.textContent = '', 4000);
       form.reset();
     });
   }
 });
