// Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const renderTasks = (filter = 'all') => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks
        .filter(task => {
            if (filter === 'completed') return task.completed;
            if (filter === 'pending') return !task.completed;
            return true;
        })
        .forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.text;
            li.classList.toggle('completed', task.completed);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks(filter);
            });

            li.addEventListener('click', () => {
                task.completed = !task.completed;
                saveTasks();
                renderTasks(filter);
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
};

// Add task
document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input').value.trim();
    if (taskInput) {
        tasks.push({ text: taskInput, completed: false });
        document.getElementById('task-input').value = '';
        saveTasks();
        renderTasks();
    }
});

// Add filters
document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        renderTasks(button.getAttribute('data-filter'));
    });
});

// Initial render
renderTasks();
