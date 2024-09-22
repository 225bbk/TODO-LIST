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