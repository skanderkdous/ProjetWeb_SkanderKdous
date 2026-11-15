// ===== VÉRIFICATION DU FORMULAIRE DE CONTACT =====

const formulaire = document.querySelector("#formulaire");
const zoneMessage = document.querySelector("#message-form");

if (formulaire && zoneMessage) {
    formulaire.addEventListener("submit", (e) => {
        e.preventDefault(); // empêche l'envoi et le rechargement de la page

        // On récupère ce que l'utilisateur a tapé (trim enlève les espaces autour)
        const nom = document.querySelector("#nom").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        // Expression régulière simple pour vérifier une adresse e-mail
        const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // On vérifie chaque champ et on affiche une erreur si besoin
        if (nom.length < 2) {
            afficherMessage("Merci d'indiquer votre nom.", "erreur");
        } else if (!emailValide) {
            afficherMessage("Merci d'indiquer une adresse e-mail valide.", "erreur");
        } else if (message.length < 10) {
            afficherMessage("Votre message doit faire au moins 10 caractères.", "erreur");
        } else {
            afficherMessage("Merci " + nom + ", votre message a bien été pris en compte !", "succes");
            formulaire.reset(); // vide le formulaire
        }
    });
}

// Affiche un message sous le formulaire, en rouge (erreur) ou en vert (succès)
function afficherMessage(texte, type) {
    zoneMessage.textContent = texte;
    zoneMessage.className = "message-form " + type;
}
