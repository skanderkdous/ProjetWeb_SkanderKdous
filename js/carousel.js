// ===== CARROUSEL =====

// On récupère les éléments du carrousel dans la page
const slides = document.querySelectorAll(".caroussel li");      // les 4 slides
const zonePoints = document.querySelector(".caroussel .points"); // la zone des petits points
const flecheGauche = document.querySelector(".caroussel .gauche");
const flecheDroite = document.querySelector(".caroussel .droite");

let indexActuel = 0; // numéro de la slide affichée (0 = la première)

// Si le carrousel n'est pas complet, on arrête le script sans bloquer la page
if (slides.length === 0 || !zonePoints || !flecheGauche || !flecheDroite) {
    throw new Error("Carrousel introuvable : le script s'arrête.");
}

// On crée automatiquement un petit point par slide
slides.forEach((slide, i) => {
    const point = document.createElement("span"); // crée un <span>
    point.classList.add("point");                 // lui donne la classe "point"
    if (i === 0) point.classList.add("active");   // le premier point est actif au départ

    // Clic sur un point : on va directement à la slide correspondante
    point.addEventListener("click", () => {
        afficherSlide(i);
        relancerAuto();
    });

    zonePoints.appendChild(point); // ajoute le point dans la page
});

// On récupère les points qu'on vient de créer
const points = document.querySelectorAll(".caroussel .point");

// Affiche la slide numéro "n"
function afficherSlide(n) {
    // Si on dépasse la dernière, on revient à la première (et inversement)
    if (n >= slides.length) n = 0;
    if (n < 0) n = slides.length - 1;

    // On enlève "active" de la slide et du point actuels...
    slides[indexActuel].classList.remove("active");
    points[indexActuel].classList.remove("active");

    // ...et on le met sur la nouvelle slide et le nouveau point
    slides[n].classList.add("active");
    points[n].classList.add("active");

    indexActuel = n;
}

// Clic sur les flèches
flecheGauche.addEventListener("click", () => {
    afficherSlide(indexActuel - 1); // slide précédente
    relancerAuto();
});

flecheDroite.addEventListener("click", () => {
    afficherSlide(indexActuel + 1); // slide suivante
    relancerAuto();
});

// Défilement automatique toutes les 4 secondes (4000 millisecondes)
let minuteur = setInterval(() => afficherSlide(indexActuel + 1), 4000);

// Quand l'utilisateur clique, on redémarre le compteur
// (sinon la slide pourrait changer juste après son clic)
function relancerAuto() {
    clearInterval(minuteur);
    minuteur = setInterval(() => afficherSlide(indexActuel + 1), 4000);
}