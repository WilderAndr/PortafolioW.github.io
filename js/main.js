// Función para cargar contenido dinámico
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portafolio cargado correctamente');
    
    // Puedes añadir interactividad aquí
    // Ejemplo: Efecto smooth scroll para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
