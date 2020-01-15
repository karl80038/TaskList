const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#itask');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector(".clear-tasks");
console.log(clearBtn);

loadEventListeners();

function loadEventListeners() 
{
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
}

function addTask(event)
{
    if (taskInput.value === '')
    {
        alert('Please enter a name for the task you want want to add');
    }

    const li = document.createElement('li');
    //Assign a class name to the HTML element
    li.className = 'collection-item';
    //Add text content to the li element
    li.appendChild(document.createTextNode(taskInput.value));
    //Add li element to the ul collection
    taskList.appendChild(li);
    //Create an anchor tag
    const removeLink = document.createElement('a');
    //Add a class name to the removeLink element
    removeLink.className = 'delete-item secondary-content';
    removeLink.innerHTML = 'X';
    li.appendChild(removeLink);

    console.log(li);

    console.log(taskInput.value);
    storeInLocalStorage(taskInput.value);
    event.preventDefault();

}

function storeInLocalStorage(task) 
{
    //Declare an array to read from local storage
    let tasks;
    if (localStorage.getItem('tasks') === null) 
    {
        tasks = [];
    }
    else 
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(event) 
{
    //Check if the area clicked contains a .delete-item element

    if (event.target.classList.contains('delete-item'))
    {
        if (confirm('Are you sure you want to delete the task?'))
        {
            //Remove the entire li element
            event.target.parentElement.remove();
        }
        console.log('remove element clicked');
    }
}