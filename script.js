const taskList = document.getElementById('task-list');

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        newTaskInput.value = '';
    }
}
