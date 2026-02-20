// drag and drop functionality

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
    });
};

sections.forEach((e)=>{
    dragAndDropFunctionality(e);
});


// add new task modal implementation

