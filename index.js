document.addEventListener('DOMContentLoaded', () => {
    // ... code précédent ...

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ajoute une classe CSS
            }
        });
    }, {
        threshold: 0.5 // Déclenche quand 50% de l'élément est visible
    });

    // Ciblez les éléments à animer
    document.querySelectorAll('.podcast-card, .statistics-items').forEach(element => {
        observer.observe(element);
    });

    // Menu mobile burger
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navButtons = document.querySelector('.nav-buttons');
    if (menuToggle && navList && navButtons) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            navButtons.classList.toggle('active');
        });
    }
});