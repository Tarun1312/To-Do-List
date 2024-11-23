document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input').value.trim();
    if (taskInput) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = taskInput;

        // Add a "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        // Toggle "completed" status
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        document.getElementById('task-input').value = '';
    }
});
