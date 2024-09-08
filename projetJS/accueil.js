let recherche=document.querySelector("#recherche");
let cercle1=document.querySelector(".cercle1");
let cercle2=document.querySelector(".cercle2");
let cercle3=document.querySelector(".cercle3");
let cercle4=document.querySelector(".cercle4");
let plus1=document.querySelector("#plus1");
let plus2=document.querySelector("#plus2");
let plus3=document.querySelector("#plus3");
let plus4=document.querySelector("#plus4");
let sombre=document.querySelector(".sombre");
let fleche=document.querySelector("#fleche");
let retour=document.querySelector("#retour");
let accueil=document.querySelector(".accueil");

plus1.addEventListener('click', ()=>{
    sombre.classList.add('active')
})
plus2.addEventListener('click', ()=>{
    sombre.classList.add('active')
})
plus3.addEventListener('click', ()=>{
    sombre.classList.add('active')
})

retour.addEventListener('click', ()=>{
    sombre.classList.remove('active')
})

cercle1.addEventListener('click', ()=>{
    sombre.classList.add('active')
})
cercle2.addEventListener('click', ()=>{
    sombre.classList.add('active')
})
cercle3.addEventListener('click', ()=>{
    sombre.classList.add('active')
})

fleche.addEventListener('click',()=>{
    window.location.href='./../projetHTML/list.html'
})
