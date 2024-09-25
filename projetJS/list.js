let tache=document.querySelector('#tache');
let plus5=document.querySelector('#plus5');
let tache2=document.querySelector('.tache');
let grand=document.querySelector('.grand');
let retour2=document.querySelector('#retour2');
let supprime=document.querySelector('.supprime');
let box=document.querySelector('#box');

retour2.addEventListener('click',()=>{
    window.location.href='./../projetHTML/accueil.html'
})

// function getTasks() {
//     let tasks = localStorage.getItem('tasks');
//     return tasks ?
//     JSON.parse(tasks) : [];
// }
// function saveTasks(tasks) {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }
// function addTask() {
//     let tache2 = document.querySelector('.tache');
//     let taskTest = tache2.Value;
//     if (taskTest === '')
//         return;
//     let tasks = getTasks();
//     tasks.push(taskTest);
//     saveTasks(tasks);
//     displayTasks();
//     tache2.value = '';
// }
// function displayTasks() {
//     let tasks = getTasks();
//     let taskList = document.querySelector('task-list');
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         let li = document.createElement('li')
//         li.textContent = task;
//         let deleteButton = document.createElement('button');
//         deleteButton.textContent = 'supprimer';
//         deleteButton.onclick = () => deleteTask(index);
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
//     });
// }


plus5.addEventListener('click', (e)=>{
    e.preventDefault();

    let valtache=tache.value;
    let liste={
        tache:valtache
    }

    localStorage.setItem("tasks",JSON.stringify(liste));
     valtache = tache.value.trim();
    if (valtache !== "") {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(valtache);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        let newTache = document.createElement('li');
        newTache.textContent = valtache;
        let newTache2=tache2.cloneNode(true);
        document.querySelector('.grand').appendChild(newTache2);
        tache.value="";
        box.checked = false;
    } else{
        alert("veuillez entrer une tache non vide")
    }
})
// supprime.addEventListener('click',()=>{
//     this.parentElement.remove();
//     let valtache = this.parentElement.textContent.trim();
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [] ;
//     tasks = tasks.filter(task => task !== valtache);
//     localStorage.setItem('tasks',JSON.stringify(tasks));
//     // displayTasks();
// })
    // function deleteTasks(index){
    //     let tasks=getTasks();
    //     tasks.splice(index, 1);
    //     saveTasks(tasks);
    //     displayTasks();
    // }
    // window.onload = function() {
    //     displayTasks();
    // };
box.addEventListener('change',()=>{
    if (box.checked){
        newTache.style.textDecoration = "line-through";
        newTache.style.color = "green";
    }else{
        newTache.style.textDecoration = "none";
        newTache.style.color = "black";
    }
})

// function displayTasks() {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     let taskList = document.querySelector('.grand');
//     taskList.innerHTML = "";
//     tasks.forEach((task,index) => {
//         let newTache = document.createElement('li');
//         newTache.textContent = task;
        // let deleteButton = document.createElement('button');
        // deleteButton.textContent = "Supprimer";
        // deleteButton.addEventListener('click', ()=>{
        //     supprimerTache(index);
        // });
//         newTache.appendChild(deleteButton);
//         taskList.appendChild(newTache);
//     });
//     let newTache = document.createElement('li');
//     newTache.textContent = valtache;
//     let newTache2=tache2.cloneNode(true);
//     document.querySelector('.grand').appendChild(newTache2);
//     tache.value="";
//     box.checked = false;
// }

// plus5.addEventListener('click',(e)=>{
//     e.preventDefault();

//     let valTache = tache.value.trim();

//     if (valTache !== "") {
//         let tasks = JSON.parse(localStorage.getItem('tasks')) || [] ;

//         tasks.push(valTache);

//         localStorage.setItem("tasks",JSON.stringify(tasks));

//         displayTasks();

//         let newTache = document.createElement('li');
//         newTache.textContent = valtache;
//         let newTache2=tache2.cloneNode(true);
//         document.querySelector('.grand').appendChild(newTache2);
//         tache.value="";
//         box.checked = false;

//     } else {
//         alert("pas de tache vide");
//     }
   
// })

//  function suppression(index) {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) ||[] ;
//     tasks.splice(index, 1);
//     localStorage.setItem('tasks',JSON.stringify(tasks));
//     displayTasks(); 
// }
// window.onload = displayTasks;


/* 
1. Récupération des Éléments du DOM
const taskInput = document.getElementById("tache");
const addButton = document.getElementById("plus5");
const taskListContainer = document.querySelector(".grand");
const titleInput = document.getElementById("titrelist");

taskInput : C'est l'élément d'entrée où l'utilisateur saisit le texte de la tâche.
addButton : C'est le bouton pour ajouter une nouvelle tâche.
taskListContainer : C'est l'élément qui contiendra toutes les tâches (la liste).
titleInput : C'est l'élément d'entrée pour le titre de la liste de tâches.

2. Charger les Tâches depuis le LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
}
loadTasks : Cette fonction récupère les tâches stockées dans le localStorage (sous la clé "tasks"). Si aucune tâche n'est trouvée, elle utilise un tableau vide.
forEach : Pour chaque tâche récupérée, elle appelle addTaskToDOM pour l'afficher dans l'interface.

3. Ajouter une Tâche au DOM
function addTaskToDOM(taskText, completed = false) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("tache");
    // ... Création des éléments pour la tâche
}
addTaskToDOM : Crée une nouvelle tâche et l'ajoute au DOM.
Création des éléments :
Un div pour la tâche (taskDiv).
Un checkbox pour marquer la tâche comme terminée.
Un input pour afficher le texte de la tâche.
Un bouton de suppression (deleteButton) pour supprimer la tâche.

4. Événements
Checkbox :
checkbox.addEventListener("change", () => {
    taskDiv.classList.toggle("barre", checkbox.checked);
    updateLocalStorage();
});
Lorsque la case est cochée ou décochée, la classe "barre" est ajoutée ou retirée (pour barrer le texte), et le localStorage est mis à jour.
Bouton de Suppression :
deleteButton.addEventListener("click", () => {
    taskDiv.remove();
    updateLocalStorage();
});
Supprime la tâche du DOM et met à jour le localStorage.
Déplacement de Tâche :
taskDiv.addEventListener("click", () => moveTaskDown(taskDiv));
Permet de déplacer la tâche vers le bas dans la liste lorsque l'utilisateur clique sur la tâche.

5. Déplacer une Tâche vers le Bas
function moveTaskDown(taskDiv) {
    const nextDiv = taskDiv.nextElementSibling;
    if (nextDiv) {
        taskListContainer.insertBefore(nextDiv, taskDiv);
    }
    updateLocalStorage();
}
moveTaskDown : Permet de déplacer une tâche vers le bas en échangeant sa position avec 
celle qui est immédiatement après elle.moveTaskDown : Permet de déplacer une tâche vers le bas en échangeant sa position avec celle qui est immédiatement après elle.

6. Ajouter une Nouvelle Tâche
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToDOM(taskText);
        taskInput.value = ""; 
        updateLocalStorage();
    }
});
Lorsqu'on clique sur le bouton d'ajout :
On récupère le texte de la tâche.
Si le texte n'est pas vide, on l'ajoute au DOM et réinitialise l'input.

7. Mettre à Jour le LocalStorage
function updateLocalStorage() {
    const tasks = Array.from(taskListContainer.children).map(taskDiv => {
        const checkbox = taskDiv.querySelector("input[type='checkbox']");
        const taskLabel = taskDiv.querySelector(".task-input");
        
        if (taskLabel && checkbox) {
            return {
                text: taskLabel.value,
                completed: checkbox.checked
            };
        }
    }).filter(task => task !== undefined);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
updateLocalStorage : Met à jour le localStorage avec toutes les tâches actuelles :
Récupère chaque tâche en parcourant les enfants du taskListContainer.
Pour chaque tâche, il crée un objet avec le texte et l'état de complétion.
Filtre les valeurs indéfinies pour éviter les erreurs et les enregistre dans le localStorage.

8. Charger les Tâches au Chargement de la Page
loadTasks();
Enfin, cette ligne appelle loadTasks lorsque la page est chargée pour afficher les tâches précédemment sauvegardées.
&
Résumé
Ce programme constitue une todo-list fonctionnelle qui permet à l'utilisateur d'ajouter, supprimer, marquer comme terminé et déplacer des tâches.
Les tâches sont sauvegardées dans le localStorage,
ce qui permet de conserver les données même après un rechargement de la page. 
Chaque fonctionnalité est implémentée avec des événements appropriés et une interaction avec le DOM pour assurer une expérience utilisateur fluide
*/