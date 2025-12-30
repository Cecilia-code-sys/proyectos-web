// Seleccionamos todos los links del menú
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Evita el salto brusco

    // Sacar "active" de todos
    navLinks.forEach(l => l.classList.remove('active'));
    // Poner "active" en el que se clickeó
    this.classList.add('active');

    // Buscar la sección a la que apunta el href
    const targetId = this.getAttribute('href').slice(1); // le sacamos el #
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
