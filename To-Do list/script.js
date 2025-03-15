
const task = document.querySelector(".text-input");
const addBtn = document.querySelector(".add");

const taskList = document.querySelector("#task-list");
function addtask(task)
{
    let newtask = document.createElement('li');
    newtask.textContent = task.value;
    taskList.appendChild(newtask);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    newtask.appendChild(span);
    task.value = "";
    saveData();
}

addBtn.addEventListener("click", () => {
    addtask(task);
})

taskList.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", taskList.innerHTML);
}

function showtask()
{
    taskList.innerHTML = localStorage.getItem("data");
}
showtask();