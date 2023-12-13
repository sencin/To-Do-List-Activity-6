function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const taskText = newTaskInput.value;

    if (taskText.trim() !== "") {
      const taskList = document.getElementById("tasks");

      const taskItem = document.createElement("li");
      taskItem.className = "task";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onclick = function() {
        toggleCompleted(taskItem);
      };

      const taskLabel = document.createElement("label");
      taskLabel.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        deleteTask(taskItem);
      };

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskLabel);
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);

      newTaskInput.value = "";
    }
  }

  function deleteTask(taskItem) {
    const taskList = document.getElementById("tasks");
    const completedTasksList = document.getElementById("completedTasks").getElementsByTagName('ul')[0];

    if (taskItem.classList.contains("completed")) {
      completedTasksList.removeChild(taskItem);
    } else {
      taskList.removeChild(taskItem);
    }
  }

  function toggleCompleted(taskItem) {
    taskItem.classList.toggle("completed");
    const taskList = document.getElementById("tasks");
    const completedTasksList = document.getElementById("completedTasks").getElementsByTagName('ul')[0];

    if (taskItem.classList.contains("completed")) {
      // Move completed task to the completedTasks list
      completedTasksList.appendChild(taskItem);
    } else {
      // Move task back to the main task list
      taskList.appendChild(taskItem);
    }
  }