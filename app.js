// Cache at least one element using selectElementById.
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const taskList = document.getElementById("taskList");

// Cache at least one element using querySelector or querySelectorAll.
const container = document.querySelector(".container");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false, dueDate: dueDate });
        displayTasks();
        taskInput.value = "";
        dueDateInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    // Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
    const fragment = document.createDocumentFragment();

    // Iterate over a collection of elements to accomplish some task.
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.text} - Due Date: ${task.dueDate}`;

        // Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
        if (task.completed) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }

        // Use appendChild and/or prepend to add new elements to the DOM.
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTaskCompletion(index));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(deleteBtn);
        fragment.appendChild(li);
    });

    // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
    taskList.innerHTML = "";
    taskList.appendChild(fragment);
}

// Register at least two different event listeners and create the associated event handler functions.
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

container.addEventListener("mouseover", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "#ddd";
    }
});

container.addEventListener("mouseout", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "";
    }
});

// Use at least two Browser Object Model (BOM) properties or methods.
console.log("Number of tasks initially:", tasks.length);
console.log("Document title:", document.title);

// Include at least one form and/or input with HTML attribute validation.
// Include at least one form and/or input with DOM event-based validation.
// The HTML form includes required attribute validation for task input.

