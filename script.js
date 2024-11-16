let tasksArray = [];
let count = 0;


function addTask() {
    let desc = document.getElementById("descriptionSet").value;
    console.log(desc);

    tasksArray.push(desc);
    count++;
    console.log(tasksArray);
    console.log(count);


    let tasksSet = document.getElementById("taskSet");

    let taskAdding = "";

    tasksArray.forEach((tasks) => {
        taskAdding += ` <ul class="list-group">
                        <li class="list-group-item">
                          <input class="form-check-input me-1" type="checkbox" value="" id="${tasks}">
                          <label class="form-check-label" for="${tasks}">${tasks}</label>
                        </li>                     
                      </ul>`
    });
    tasksSet.innerHTML = taskAdding;
    console.log(taskAdding);

    let element = "";
    for (let i = 0; i < tasksArray.length; i++) {
        console.log(document.getElementById(tasksArray[i]).checked);
        document.getElementById(tasksArray[i]).addEventListener("change", function () {
            if (this.checked) {
                console.log("check");
                element = tasksArray[i];                
                console.log("elemtn" + element);

                finishTask();
                // tasksArray.splice(count, 1);
                
                console.log(tasksArray);
                


            } else {
                console.log("unchecked");
            }
        });

    }
    function finishTask() {
        let finishT = document.getElementById("finishTask");
        finishT.innerHTML += `<h1 class="text-text-success">${element}</h1>`

    }











}



