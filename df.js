// script.js
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });

  // Fonction pour remplir la barre de progression au défilement
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                progressBar.style.width = progressBar.getAttribute('data-width'); // Remplir la barre de progression
                observer.unobserve(progressBar); // Désactiver l'observation une fois l'animation faite
            }
        });
    }, { threshold: 0.5 });

    // Observer chaque barre de progression
    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});
