console.log("JS connected")
const todo = document.querySelector("#todo");
const inprogress = document.querySelector("#inprogress");
const done = document.querySelector("#done");
const sections = document.querySelectorAll(".common");
const add_new_task = document.querySelector(".add");
const modal = document.querySelector(".modal");
const exit= document.querySelector(".modal_exit");
let task_desc= document.querySelector(".task_desc");
let add_btn= document.querySelector(".add_btn");
let task= document.querySelector(".task");
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

add_new_task.addEventListener("click",(e)=>{
    modal.classList.add("active");
})

exit.addEventListener("click",(e)=>{
    modal.classList.remove("active");
})

add_btn.addEventListener("click",(e)=>{
    let taskTitle= document.querySelector(".task_name").value;
    let taskDescription= document.querySelector(".task_desc").value;
    let div= document.createElement("div");
    div.classList.add("task1");
    div.setAttribute("draggable","true");
    div.innerHTML=`<div class="taskName">${taskTitle}</div>
                    <div class=taskDescription>${taskDescription}</div>`
    task.appendChild(div);
    modal.classList.remove("active");
    div.addEventListener("drag", (e) => {
        // console.log(e);
        // console.log(task);
        dragElement = task;
    })

})

sections.forEach((columns)=>{
    addDragEventsOnSections(columns);
})