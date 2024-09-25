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