// Récupération des éléments du DOM
const taskInput = document.getElementById("tache");
const addButton = document.getElementById("plus5");
const taskListContainer = document.querySelector(".grand");
const titleInput = document.getElementById("titrelist");

// Fonction pour charger les tâches depuis le localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
}

// Fonction pour ajouter une tâche au DOM
function addTaskToDOM(taskText, completed = false) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("tache");

    const checkDiv = document.createElement("div");
    checkDiv.classList.add("check");
    const checkbox = document.createElement("input");
    checkbox.style.width = "35px";
    checkbox.style.height = "35px";
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        taskDiv.classList.toggle("barre", checkbox.checked);
        updateLocalStorage();
    });
    checkDiv.appendChild(checkbox);

    const traitDiv = document.createElement("div");
    traitDiv.classList.add("trait");
    const taskLabel = document.createElement("input");
    taskLabel.type = "text";
    taskLabel.value = taskText;
    taskLabel.readOnly = true;
    taskLabel.classList.add("task-input");
    taskLabel.style.width = "90%"
    taskLabel.style.height = "25px"
    taskLabel.style.background= "none";
    taskLabel.style.outline = "none"
    taskLabel.style.border = "none"
    traitDiv.appendChild(taskLabel);

    const supprimeDiv = document.createElement("div");
    supprimeDiv.classList.add("supprime");
    const deleteButton = document.createElement("img");
    deleteButton.src = "./../image/croix-removebg-preview.png";
    deleteButton.style.width = "20px";
    deleteButton.addEventListener("click", () => {
        taskDiv.remove();
        // Mettre à jour le localStorage après suppression
        updateLocalStorage(); 
    });
    supprimeDiv.appendChild(deleteButton);

    taskDiv.appendChild(checkDiv);
    taskDiv.appendChild(traitDiv);
    taskDiv.appendChild(supprimeDiv);
    taskDiv.classList.toggle("barre", completed);

    // Ajouter l'événement pour déplacer la tâche
    taskDiv.addEventListener("click", () => moveTaskDown(taskDiv));

    taskListContainer.appendChild(taskDiv);
}

// Fonction pour déplacer une tâche vers le bas
function moveTaskDown(taskDiv) {
    const nextDiv = taskDiv.nextElementSibling;
    if (nextDiv) {
        // Échanger les tâches
        taskListContainer.insertBefore(nextDiv, taskDiv);
    }
    updateLocalStorage();
}

// Fonction pour ajouter une nouvelle tâche
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToDOM(taskText);
        // Réinitialiser l'input
        taskInput.value = ""; 
        // Mettre à jour le localStorage après ajout
        updateLocalStorage(); 
    }
});

// Fonction pour mettre à jour le localStorage
function updateLocalStorage() {
    const tasks = Array.from(taskListContainer.children).map(taskDiv => {
        const checkbox = taskDiv.querySelector("input[type='checkbox']");
        const taskLabel = taskDiv.querySelector(".task-input");
        
        // Vérification que les éléments existent avant de les utiliser et Filtrer les valeurs undefined
        if (taskLabel && checkbox) {
            return {
                text: taskLabel.value,
                completed: checkbox.checked
            };
        }
    }).filter(task => task !== undefined);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Charger les tâches lors du chargement de la page
loadTasks();

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