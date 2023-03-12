

let text = document.getElementById("text");
let addbtn = document.getElementById("btn");
let task = document.getElementById("task");


addbtn.addEventListener("click", (event) => {
    event.preventDefault();

    
    if (!text.value) {
        alert("Enter task")
    }
    else {
        let li = document.createElement("li");

        /// for button keep together //
        let btncontainer = document.createElement("div");
        btncontainer.className="btncontainer";
        ///
        

        //add DELETE button //
        let deletbtn = document.createElement("button");
        deletbtn.appendChild(document.createTextNode("Delete"));
        deletbtn.className = "deletbtn";

        
        //add check  button //
        let checkbtn = document.createElement("button");
        checkbtn.appendChild(document.createTextNode("Done"));
        checkbtn.className = "checkbtn";

        // add both button to div(btncontainer)
        btncontainer.appendChild(checkbtn);
        btncontainer.appendChild(deletbtn);
        //
        
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
            }

        });
        checkbtn.addEventListener("click", (e) => {
            li = e.target.parentElement;
            li.removeChild(checkbtn);
            compleatedtask.appendChild(li);

        })


    }
    /////
    if(task.length=="0"){
        task.li.innerText="No Task"
    }
    /////
})

// OR FOR  EXTERNAL FUNCTIONALITY OF DELETED BUTTON AND CHECK BUTTON

// task.addEventListener("click", (e) => {
//     if (e.target.classList.contains("checkbtn")) {
//         task.removeChild(e.target.parentElement)
//         compleatedtask.appendChild(e.target.parentElement)
//     }


//     if (e.target.classList.contains("deletbtn")) {
//         if (confirm("Are You Sure?")) {
//             task.removeChild(e.target.parentElement)
//         }
//     }
// })

// compleatedtask.addEventListener("click", (e) => {
//     if (e.target.classList.contains("deletbtn")) {
//         if (confirm("Are You Sure?")) {
//             compleatedtask.removeChild(e.target.parentElement);
//             compleatedtask.removeChild(e.target.parentElement.checkbtn);

//         }
//     }
// })

