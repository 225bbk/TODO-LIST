/* let nom=document.querySelector("#userName");
let mail=document.querySelector("#email");
let motp=document.querySelector("#password");
let cmotp=document.querySelector("#cpassword");
let btn=document.querySelector("#bouton");
let error=document.querySelector("#error");
let form=document.querySelector("#form");


btn.addEventListener("click",(e)=>{
    e.preventDefault();

    let valnom=nom.value;
    let valmail=mail.value;
    let valmotp=motp.value;
    let valcmotp=cmotp.value;
    console.log(valnom,valmail,valmotp,valcmotp);
    

    const utilisateur={
        name:valnom,
        email:valmail,
        password:valmotp,
        cpassword:valcmotp
    }
    localStorage.setItem("user",JSON.stringify(utilisateur));
    

    if (valmotp.trim() !== "" || valmotp === valcmotp) {
        if (valnom.trim() === "" || valmail.trim() === "" ) {
            alert("ce champ ne peut pas contenir que des espaces!")
        } else {
            alert("inscription réussie!");
            window.location.href='./../projetHTML/connexion.html';
        }
        
    } else {
        alert("le mot de passe ne correspond pas!");
    }
})
 */



document.getElementById("inscription-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;

    // Vérifier si les mots de passe correspondent
    if (password !== cpassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }

    // Créer un objet d'utilisateur
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Stocker l'utilisateur dans le localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Afficher un message de succès ou rediriger vers une autre page
    alert("Inscription réussie !");
    window.location.href = "./../projetHTML/connexion.html";
});


