document.getElementById('logForm').addEventListener('submit',(e)=>{ 
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

})
