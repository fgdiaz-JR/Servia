const navbarHTML = `

<nav class="navbar">
  <div class="navbar-container">
    <a href="/index.html" class="navbar-logo">
      <img src="/assets/logo-serviaseo.jpg" alt="SERVIASEO Logo" height="40" />
    </a>
    <div class="navbar-links">
      <a href="/index.html">Inicio</a>
      <a href="/nosotros.html">Nosotros</a>
      <a href="/productos.html">Productos</a>
      <a href="/servicios.html">Servicios</a>
      <a href="/contacto.html">Contacto</a>
      <a href="/trabaja.html">Trabaja con Nosotros</a>
    </div>
    <form class="navbar-search" id="navbar-search-form" autocomplete="off" onsubmit="return false;">
      <input type="text" id="navbar-search-input" placeholder="Buscar..." aria-label="Buscar" autocomplete="off" />
      <div id="navbar-suggestions" class="navbar-suggestions"></div>
      <button type="submit">🔍</button>
    </form>
  </div>
</nav>
`;

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('navbar-container');
  if (container) {
    container.innerHTML = navbarHTML;

    // Lógica de búsqueda (idéntica a la versión HTML)
    const items = [
      { tipo: 'producto', nombre: 'Producto A', url: '/productos.html#producto-a' },
      { tipo: 'producto', nombre: 'Producto B', url: '/productos.html#producto-b' },
      { tipo: 'producto', nombre: 'Producto C', url: '/productos.html#producto-c' },
      { tipo: 'servicio', nombre: 'Servicio 1', url: '/servicios.html#servicio-1' },
      { tipo: 'servicio', nombre: 'Servicio 2', url: '/servicios.html#servicio-2' },
      { tipo: 'servicio', nombre: 'Servicio 3', url: '/servicios.html#servicio-3' },
    ];
    const input = document.getElementById('navbar-search-input');
    const form = document.getElementById('navbar-search-form');
    const suggestions = document.getElementById('navbar-suggestions');
    if (input && form && suggestions) {
      input.addEventListener('input', function() {
        const query = input.value.trim().toLowerCase();
        suggestions.innerHTML = '';
        if (!query) return;
        const matches = items.filter(item => item.nombre.toLowerCase().includes(query));
        if (matches.length) {
          suggestions.style.display = 'block';
          matches.forEach(item => {
            const div = document.createElement('div');
            div.className = 'navbar-suggestion-item';
            div.textContent = `${item.nombre} (${item.tipo})`;
            div.onclick = () => { window.location.href = item.url; };
            suggestions.appendChild(div);
          });
        } else {
          suggestions.style.display = 'none';
        }
      });
      input.addEventListener('blur', () => setTimeout(() => suggestions.style.display = 'none', 200));
      input.addEventListener('focus', function() {
        if (input.value.trim()) suggestions.style.display = 'block';
      });
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = input.value.trim().toLowerCase();
        const match = items.find(item => item.nombre.toLowerCase() === query);
        if (match) {
          window.location.href = match.url;
        } else if (items.some(item => item.nombre.toLowerCase().includes(query))) {
          const first = items.find(item => item.nombre.toLowerCase().includes(query));
          window.location.href = first.url;
        } else {
          alert('No se encontró ningún producto o servicio con ese nombre.');
        }
      });
    }
  }
});
