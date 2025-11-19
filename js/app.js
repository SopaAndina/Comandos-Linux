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
