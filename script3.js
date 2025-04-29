document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('open'); // Cambia el estado del icono hamburguesa
    document.querySelector('.menu').classList.toggle('active'); // Muestra/oculta el menú
});
