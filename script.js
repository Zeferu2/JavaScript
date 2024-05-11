const ul = document.getElementById('todoList');
const input = document.getElementById('newTask');
const button = document.getElementById('addTask');

button.addEventListener('click', (Event)=> {
    const li = document.createElement('li');
    li.addEventListener('click', (Event)=> {
     li.remove(); })

    li.textContent = input.value;
    ul.appendChild(li);
})

