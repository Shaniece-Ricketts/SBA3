// Function to add a new task
/*function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;
    if (taskText.trim() !== "") {
        let ul = document.getElementById("taskList");
        let li = document.createElement("li");
        li.textContent = taskText;
        li.className = "task";
        li.onclick = function() {
            this.classList.toggle("completed");
        };
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}*/







// // Function to add a new task
// function addTask() {
//     let input = document.getElementById("taskInput");
//     let taskText = input.value.trim();
//     let category = document.getElementById("categoryInput").value;
    
//     if (taskText !== "") {
//         let ul = document.getElementById("taskList");
//         let li = document.createElement("li");
//         li.textContent = taskText;
//         li.className = "task " + category; // Add category as class
//         li.onclick = function() {
//             this.classList.toggle("completed");
//             if (this.classList.contains("completed")) {
//                 let completedTask = this;
//                 setTimeout(function() {
//                     ul.removeChild(completedTask);
//                 }, 1000); // Remove task after 1 seconds
//             }
//         };
//         ul.appendChild(li);
//         input.value = "";
//     } else {
//         alert("Please enter a task!");
//     }
// }





let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

