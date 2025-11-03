let addBtn = document.getElementById("add-btn")
let taskInput = document.getElementById("task-input")
let taskList = document.getElementById("task-list")
let tasks = JSON.parse(localStorage.getItem("list")) || [];

tasks.forEach(function(text){
    createTask(text)
})

addBtn.addEventListener("click", function() {
    let text = taskInput.value.trim();
    
    if(text ===""){
        alert("You need to enter something so u can do the task😑")
        return;
    }

    tasks.push(text);
    localStorage.setItem("list", JSON.stringify(tasks))

    createTask(text);
    taskInput.value =""
})

function createTask(text){
    let li = document.createElement("li")
    li.textContent = text

    let delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.style.cursor = "pointer"
    li.appendChild(delBtn)

    taskList.appendChild(li);

    li.addEventListener("click", function() {
        li.classList.toggle("done")
    })

    delBtn.addEventListener("click", function (event) {
        event.stopPropagation(); 
        li.remove();

        tasks = tasks.filter(function(t){
        return t !== text
        })

        localStorage.setItem("list", JSON.stringify(tasks))
    })
}

