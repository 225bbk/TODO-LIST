let pg=document.querySelector("#pg");
let fdebase=document.querySelector("#fdebase");
let grande2=document.querySelector(".grande2");
let grande3=document.querySelector(".grande3");
let retour=document.querySelector(".retour");
let retour2=document.querySelector(".retour2");
let retour0=document.querySelector(".retour0")

pg.addEventListener('click', ()=>{
    grande2.classList.add('active');
});
retour.addEventListener('click', ()=>{
    grande2.classList.remove('active')
})
fdebase.addEventListener('click', ()=>{
    grande3.classList.add('active');
});
retour2.addEventListener('click', ()=>{
    grande3.classList.remove('active')
})
retour0.addEventListener('click',()=>{
    window.location.href='./../projetHTML/accueil.html'
})