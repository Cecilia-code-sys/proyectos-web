
// Menú responsive
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Resaltar link activo según scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

const setActive = () => {
  let current = '';
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) current = sec.getAttribute('id');
  });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

// Cerrar menú al hacer clic en un enlace (móvil)
links.forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
}));
