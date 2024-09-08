let carre=document.querySelector('#carre');
let coche=document.querySelector('.coche');
let tache=document.querySelector('#tache');
let plus5=document.querySelector('#plus5');
let tache2=document.querySelector('.tache');
let grand=document.querySelector('.grand');
let retour2=document.querySelector('#retour2');


carre.addEventListener('click',()=>{
    coche.style.color="white"
    carre.style.background="green"
    coche.classList.add('active')
})

// plus5.addEventListener('click',()=>{
//     tache2.innerHTML+=tache2.innerHTML
// })

retour2.addEventListener('click',()=>{
    window.location.href='./../projetHTML/accueil.html'
})

plus5.addEventListener('click', ()=>{
    let newTache=tache2.cloneNode(true);
    newTache.querySelector('input[type="text"]').value="";
    document.querySelector('.grand').appendChild(newTache)
})