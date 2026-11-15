// ===== MENU BURGER (téléphone) =====

const burger = document.querySelector(".burger");
const menu = document.querySelector("header nav");

// On vérifie que les éléments existent avant de s'en servir
if (burger && menu) {
    burger.addEventListener("click", () => {
        menu.classList.toggle("ouvert"); // affiche ou cache le menu

        // On indique aux lecteurs d'écran si le menu est ouvert ou fermé
        const estOuvert = menu.classList.contains("ouvert");
        burger.setAttribute("aria-expanded", estOuvert);
    });
}
