const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");
// función para mostrar solo una sección
function showSection(id) {
  sections.forEach(section => {
    section.classList.remove("visible");
    if (section.id === id) {
      section.classList.add("visible");
    }
  });
}
// escuchar los clics en el menú
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    // remover el "active" del resto y agregar al clickeado
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    // mostrar la sección correspondiente
    const sectionId = link.getAttribute("data-section");
    showSection(sectionId);
  });
});
// mostrar la primera por defecto
showSection("problema");

