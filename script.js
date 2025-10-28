let addBtn = document.getElementById("add-btn")
let taskInput = document.getElementById("task-input")
let taskList = document.getElementById("task-list")

addBtn.addEventListener("click", function() {
    let text = taskInput.value

    if(text ===""){
        alert("You need to enter something so u can do the task😑")
        return;
    }

    let li = document.createElement("li")
    li.textContent = text

    let delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.style.cursor = "pointer"
    li.appendChild(delBtn)

    taskList.appendChild(li);
    taskInput.value = "";

    li.addEventListener("click", function() {
        li.classList.toggle("done")
    })

    delBtn.addEventListener("click", function (event) {
        event.stopPropagation(); 
        li.remove();
    })

})