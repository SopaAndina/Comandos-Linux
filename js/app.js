const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("#grid .row");

searchInput.addEventListener("input", () => {
    const filtro = searchInput.value.toLowerCase();

    rows.forEach(row => {
        // Tomamos todo el texto de la fila (categoría + comando + descripción)
        const texto = row.textContent.toLowerCase();

        if (texto.includes(filtro)) {
            row.style.display = "grid"; // mostrar fila completa
        } else {
            row.style.display = "none"; // ocultar fila completa
        }
    });
});



/// Escroll Reveral ///
console.log("GSAP disponible:", typeof gsap); // debería mostrar "object"

console.log("script.js cargado");

ScrollReveal().reveal('.elemento', {
    duration: 2000,
    easing: 'ease-out',
    reset: false
});

ScrollReveal().reveal('#search',{
    delay:200
});



ScrollReveal().reveal('.grid-container', {

  origin: 'bottom',
  distance: '40px',
  duration: 600,
  delay:600,
  viewOffset: { top: 0, bottom: 0 }, // sin margen extra
  interval: 200, // cada elemento aparece con 200ms de diferencia
  reset: false

})

ScrollReveal().reveal('.grid-container',{ 
    origin: 'left', 
    distance: '80px' 
});
