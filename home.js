console.log("JS connected")
const todo = document.querySelector("#todo");
const inprogress = document.querySelector("#inprogress");
const done = document.querySelector("#done");
const sections = document.querySelectorAll(".common");

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
    task.addEventListener("drag", (e) => {
        // console.log(e);
    })
})

sections.forEach((val) => {
    val.addEventListener("dragenter", (e)=>{
        val.classList.add("hover_over");
    })

    val.addEventListener("dragleave", (e) => {
        val.classList.remove("hover_over");
    })
})