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
});