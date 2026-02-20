const todo = document.getElementById("todo");
const inprogress = document.getElementById("inprogress");
const done = document.getElementById("done");
// dashed hover effect and drag and drop functionality

const task= document.querySelectorAll(".task");
let draggedElement= null;

function elementDragged(val){
    val.addEventListener("dragstart",(e)=>{
        draggedElement= val;
    });
};

task.forEach((e)=>{
    elementDragged(e);
});

const sections= document.querySelectorAll(".common");

function dragAndDropFunctionality(val){
    val.addEventListener("dragenter",(e)=>{
        val.classList.add("hover_over");
    });

    val.addEventListener("dragleave",(e)=>{
        val.classList.remove("hover_over");
    });

    val.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });

    val.addEventListener("drop",(e)=>{
        e.preventDefault();
        val.appendChild(draggedElement);
        val.classList.remove("hover_over");
        updateCount();
    });
};

sections.forEach((e)=>{
    dragAndDropFunctionality(e);
});


// add new task modal visibility

const addNewTask= document.querySelector(".add");
const modal= document.querySelector(".modal");
const modalExit= document.querySelector(".modal_exit");

addNewTask.addEventListener("click",(e)=>{
    modal.classList.add("active");
});

modalExit.addEventListener("click",(e)=>{
    modal.classList.remove("active");
});

// add new task to todo

const taskTitle= document.querySelector(".task_name");
const taskDescription= document.querySelector(".task_desc");
const addButton= document.querySelector(".add_btn");

addButton.addEventListener("click",(e)=>{
    // extracting user values

    let title= taskTitle.value;
    let description= taskDescription.value;

    // creating task element dynamically

    let div= document.createElement("div");
    let name= document.createElement("div");
    let desc= document.createElement("div");
    const todo= document.querySelector(".todo");
    div.classList.add("task");
    name.classList.add("taskName");
    desc.classList.add("taskDescription");
    div.appendChild(name);
    div.appendChild(desc);
    div.setAttribute("draggable","true");
    name.innerText= title;
    desc.innerText= description;

    // appending to new element

    todo.appendChild(div);

    // tracking element

    elementDragged(div);

    // removing modal
    updateCount();
    modal.classList.remove("active");
});

// update count

function updateCount(){
    const todoCount= todo.querySelectorAll(".task");
    const inProgressCount= inprogress.querySelectorAll(".task");
    const doneCount= done.querySelectorAll(".task");
    const count= document.querySelectorAll(".count");
    count[0].innerText= todoCount.length;
    count[1].innerText= inProgressCount.length;
    count[2].innerText= doneCount.length;
}
