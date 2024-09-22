let nom=document.querySelector("#userName");
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

