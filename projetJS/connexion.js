/*document.getElementById('logForm').addEventListener('submit',(e)=>{ 
    e.preventDefault();
    let mail2=document.querySelector("#email2").value;
    let motp2=document.querySelector("#password2").value;
    const loginUser=JSON.parse(localStorage.getItem("user"));
    if (loginUser) {
        if (loginUser.email === mail2 && loginUser.password === motp2) {
            alert("connexion réussie!")
            window.location.href='./../projetHTML/accueil.html';
        } else{
            alert("email ou password incorrect!")
        }
    } else{
        alert("utilisateur introuvable!")
    }

})*/

document.getElementById("logForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Récupérer les valeurs des champs
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;

    // Récupérer les données de l'utilisateur depuis le localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Vérifier si l'utilisateur existe et si le mot de passe est correct
    if (user && user.email === email && user.password === password) {
        alert("Connexion réussie !",email);
        // Rediriger vers la page d'accueil ou une autre page
        window.location.href = "./../projetHTML/accueil.html";
    } else {
        alert("Email ou mot de passe incorrect !");
    }
});

