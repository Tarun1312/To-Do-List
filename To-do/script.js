document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input').value.trim();
    if (taskInput) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = taskInput;
        taskList.appendChild(li);
        document.getElementById('task-input').value = '';
    }
});
