//global variables

const todo = document.getElementById("todo");
const inprogress = document.getElementById("inprogress");
const done = document.getElementById("done");

// create previous information if present

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const a in data) {
        const column = document.querySelector(`#${a}`);
        data[a].forEach((task) => {
            let div = document.createElement("div");
            let name = document.createElement("div");
            let desc = document.createElement("div");
            let deleteButton = document.createElement("button");
            div.classList.add("task");
            name.classList.add("taskName");
            desc.classList.add("taskDescription");
            deleteButton.classList.add("delete");
            deleteButton.innerText = "Delete"
            div.appendChild(name);
            div.appendChild(desc);
            div.appendChild(deleteButton);
            div.setAttribute("draggable", "true");
            name.innerText = task.title;
            desc.innerText = task.description;
            column.appendChild(div);
            deleteTaskTrack();
        });
    }
}

updateCount();
// dashed hover effect and drag and drop functionality

const task = document.querySelectorAll(".task");
let draggedElement = null;

function elementDragged(val) {
    val.addEventListener("dragstart", (e) => {
        draggedElement = val;
    });
};

task.forEach((e) => {
    elementDragged(e);
});

const sections = document.querySelectorAll(".common");

function dragAndDropFunctionality(val) {
    val.addEventListener("dragenter", (e) => {
        val.classList.add("hover_over");
    });

    val.addEventListener("dragleave", (e) => {
        val.classList.remove("hover_over");
    });

    val.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    val.addEventListener("drop", (e) => {
        e.preventDefault();
        val.appendChild(draggedElement);
        val.classList.remove("hover_over");
        updateCount();
        addToLocalStorage();
    });
};

sections.forEach((e) => {
    dragAndDropFunctionality(e);
});


// add new task modal visibility

const addNewTask = document.querySelector(".add");
const modal = document.querySelector(".modal");
const modalExit = document.querySelector(".modal_exit");

addNewTask.addEventListener("click", (e) => {
    modal.classList.add("active");
});

modalExit.addEventListener("click", (e) => {
    modal.classList.remove("active");
});

// add new task to todo

const taskTitle = document.querySelector(".task_name");
const taskDescription = document.querySelector(".task_desc");
const addButton = document.querySelector(".add_btn");

addButton.addEventListener("click", (e) => {
    // extracting user values

    let title = taskTitle.value;
    let description = taskDescription.value;

    // check if any field is empty
    
    if (taskTitle.value=="" || taskDescription.value==""){
        alert("Fill both the fields");
        const modalExit= document.querySelector(".modal_exit");
        modalExit.click();
    }else{
        addElement();
    }

    // creating task element dynamically

function addElement(){
    let div = document.createElement("div");
    let name = document.createElement("div");
    let desc = document.createElement("div");
    let deleteButton = document.createElement("button");
    const todo = document.querySelector(".todo");
    div.classList.add("task");
    name.classList.add("taskName");
    desc.classList.add("taskDescription");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete"
    div.appendChild(name);
    div.appendChild(desc);
    div.appendChild(deleteButton);
    div.setAttribute("draggable", "true");
    name.innerText = title;
    desc.innerText = description;

    // appending to new element

    todo.appendChild(div);

    // tracking element

    elementDragged(div);

    // removing modal

    modal.classList.remove("active");

    // essential functions call

    addToLocalStorage(todo);
    updateCount();
    deleteTaskTrack();

    // empty the input fields

    taskTitle.value="";
    taskDescription.value="";
}
});

// update count

function updateCount() {
    const todoCount = todo.querySelectorAll(".task");
    const inProgressCount = inprogress.querySelectorAll(".task");
    const doneCount = done.querySelectorAll(".task");
    const count = document.querySelectorAll(".count");
    count[0].innerText = todoCount.length;
    count[1].innerText = inProgressCount.length;
    count[2].innerText = doneCount.length;
}

// delete button functionality

function deleteTaskTrack() {
    const todo = document.querySelector(".todo");
    const inProgress = document.querySelector(".inprogress");
    const done = document.querySelector(".done");
    const todoDelete = todo.querySelectorAll(".delete");
    const inProgressDelete = inProgress.querySelectorAll(".delete");
    const doneDelete = done.querySelectorAll(".delete");
    todoDelete.forEach((e) => {
        deleteButtonFunctionality(e);
    });

    inProgressDelete.forEach((e) => {
        deleteButtonFunctionality(e);
    });

    doneDelete.forEach((e) => {
        deleteButtonFunctionality(e);
    });
};

function deleteButtonFunctionality(val) {
    val.addEventListener("click", (e) => {
        let taskToRemove = val.parentElement;
        let taskColumnToRemove = taskToRemove.parentElement;
        taskColumnToRemove.removeChild(taskToRemove);
        updateCount();
        addToLocalStorage();
    });
};

// local storage connection

let taskData = {}

function addToLocalStorage() {

    const data = {
        todo: getTasks(todo),
        inprogress: getTasks(inprogress),
        done: getTasks(done)
    };

    localStorage.setItem("tasks", JSON.stringify(data));
}

function getTasks(section){
    return Array.from(section.querySelectorAll(".task")).map(task => ({
        title: task.querySelector(".taskName").textContent,
        description: task.querySelector(".taskDescription").textContent
    }));
}