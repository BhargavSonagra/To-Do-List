let text = document.getElementById("text");
let addbtn = document.getElementById("btn");
let task = document.getElementById("task");
let compleatedtask = document.getElementById("compleatedtask");

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(obj => {
        addTaskFromStorage(obj.text, obj.completed);
    });
});

// Save tasks to localStorage
function updateLocalStorage() {
    let tasksArr = [];

    task.querySelectorAll("li").forEach(li => {
        tasksArr.push({
            text: li.childNodes[0].textContent,
            completed: false
        });
    });

    compleatedtask.querySelectorAll("li").forEach(li => {
        tasksArr.push({
            text: li.childNodes[0].textContent,
            completed: true
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

// Add task from storage
function addTaskFromStorage(value, completed) {
    let li = document.createElement("li");

    let btncontainer = document.createElement("div");
    btncontainer.className = "btncontainer";

    let deletbtn = document.createElement("button");
    deletbtn.appendChild(document.createTextNode("Delete"));
    deletbtn.className = "deletbtn";

    let checkbtn = document.createElement("button");
    checkbtn.appendChild(document.createTextNode("Done"));
    checkbtn.className = "checkbtn";

    btncontainer.appendChild(checkbtn);
    btncontainer.appendChild(deletbtn);

    li.appendChild(document.createTextNode(value));
    li.appendChild(btncontainer);
    li.appendChild(checkbtn);
    li.appendChild(deletbtn);

    if (completed) {
        li.removeChild(checkbtn);
        compleatedtask.appendChild(li);
    } else {
        task.appendChild(li);
    }

    deletbtn.addEventListener("click", (e) => {
        li = e.target.parentElement;
        if (confirm("Are You Sure?")) {
            li.remove();
            updateLocalStorage();
        }
    });

    checkbtn.addEventListener("click", (e) => {
        li = e.target.parentElement;
        li.removeChild(checkbtn);
        compleatedtask.appendChild(li);
        updateLocalStorage();
    });
}

// Button click event (your original logic)
addbtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!text.value) {
        alert("Enter task");
    } else {
        let li = document.createElement("li");

        let btncontainer = document.createElement("div");
        btncontainer.className = "btncontainer";

        let deletbtn = document.createElement("button");
        deletbtn.appendChild(document.createTextNode("Delete"));
        deletbtn.className = "deletbtn";

        let checkbtn = document.createElement("button");
        checkbtn.appendChild(document.createTextNode("Done"));
        checkbtn.className = "checkbtn";

        btncontainer.appendChild(checkbtn);
        btncontainer.appendChild(deletbtn);

        li.appendChild(document.createTextNode(text.value));
        li.appendChild(btncontainer);
        li.appendChild(checkbtn);
        li.appendChild(deletbtn);
        task.appendChild(li);
        text.value = "";

        deletbtn.addEventListener("click", (e) => {
            li = e.target.parentElement;
            if (confirm("Are You Sure?")) {
                li.remove();
                updateLocalStorage();
            }
        });

        checkbtn.addEventListener("click", (e) => {
            li = e.target.parentElement;
            li.removeChild(checkbtn);
            compleatedtask.appendChild(li);
            updateLocalStorage();
        });

        updateLocalStorage(); // Save new task
    }

    if (task.length == "0") {
        task.li.innerText = "No Task";
    }
});