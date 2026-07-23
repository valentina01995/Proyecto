// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mensaje de bienvenida en consola
console.log("Bienvenido a Origen | Restaurante de Alta Cocina");

// Animación de entrada para los títulos
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('h1, h2').forEach(titulo => {
    titulo.style.opacity = 0;
    titulo.style.transform = "translateY(20px)";
    setTimeout(() => {
      titulo.style.transition = "all 1s ease";
      titulo.style.opacity = 1;
      titulo.style.transform = "translateY(0)";
    }, 300);
  });
});
