console.log("JS connected")
const todo = document.querySelector("#todo");
const inprogress = document.querySelector("#inprogress");
const done = document.querySelector("#done");
const sections = document.querySelectorAll(".common");
const add_btn = document.querySelector(".add");
const modal = document.querySelector(".modal");
const exit= document.querySelector(".modal_exit")
console.log(modal)
let dragElement = null;

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
    task.addEventListener("drag", (e) => {
        // console.log(e);
        // console.log(task);
        dragElement = task;
    })
})

// sections.forEach((val) => {
//     val.addEventListener("dragenter", (e)=>{
//         val.classList.add("hover_over");
//     })

//     val.addEventListener("dragleave", (e) => {
//         val.classList.remove("hover_over");
//     })
// })

function addDragEventsOnSections(columns){
    columns.addEventListener("dragenter",(e)=>{
        columns.classList.add("hover_over");
    })

    columns.addEventListener("dragleave",(e)=>{
    columns.classList.remove("hover_over");
    })

    columns.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

    columns.addEventListener("drop",(e)=>{
        e.preventDefault();
        // console.log("dropped");
        // console.log("dropped",dragElement,columns)
        columns.appendChild(dragElement);
        columns.classList.remove("hover_over");
    })
}

add_btn.addEventListener("click",(e)=>{
    modal.classList.add("active");
})

exit.addEventListener("click",(e)=>{
    modal.classList.remove("active");
})

sections.forEach((columns)=>{
    addDragEventsOnSections(columns);
})