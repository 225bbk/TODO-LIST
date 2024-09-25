// Récupération de l'élément de déconnexion
const deconnexionButton = document.getElementById("deconnexion");

// Fonction de déconnexion
deconnexionButton.addEventListener("click", () => {
    // Supprimer les informations de l'utilisateur du localStorage
    localStorage.removeItem("user");
    // Rediriger vers la page de connexion
    window.location.href = "./../projetHTML/connexion.html";
});

window.onload = function() {
    const user = localStorage.getItem("user");
    if (!user) {
        window.location.href = "./../projetHTML/connexion.html"; 
    }
};