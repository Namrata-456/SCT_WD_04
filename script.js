function addTask(){
 const taskInput=document.getElementById("taskInput");
 const taskDateTime = document.getElementById("taskDateTime");
 
 if (taskInput.value.trim()==="")return;//removes spaces and return of no task is added only space is 
 const taskText = taskInput.value;
 const taskTime = taskDateTime.value;

 const taskList = document.getElementById(taskList);
 const li = document.createElement("li")
 li.className = "task-item";//It assigns the class task-item to the newly created <li> element.

 const taskContent= document.createElement("div");//A <div> is created inside <li> to hold the task text and date/time.Uses <strong> for bold task name and <small> for smaller date/time text.
 taskContent.innerHTML = `<strong> ${taskText}</strong><small>${taskTime}</small>`;

 const btns = document.createElement("div");
 btns.className = "task-buttons";
 btns.innerHTML = `<button onclick = "editTask(this)">Edit</button>
                  <button onclick = "toggleCompleteTask(this)">Complete</button>
                 <button onclick = "editTask(this)">Delete</button>`
 

li.appendChild(taskContent);
li.appendChild(btns);
taskList.appendChild(li);

taskInput.value = "";//Clears the input fields after adding a task.
taskDateTime.value = "";

}
//editTask(button)
function editTask(button){
    const
}