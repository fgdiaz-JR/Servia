function loadComponent(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
}
loadComponent('footer-container', 'components/footer.html');
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
