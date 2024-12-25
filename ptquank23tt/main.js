document.addEventListener("DOMContentLoaded", function () {
    const tasksIn = document.getElementById("taskText");
    const addbtn = document.getElementById("addbtn");
    const taskList = document.getElementById("taskList");

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((task) => addTask(task.text, task.completed));

    addbtn.addEventListener("click", () => addTaskInput());
    tasksIn.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTaskInput();
    });
  
    function addTaskInput() {
      const text = tasksIn.value.trim();
      if (text) {
        addTask(text, false);
        saveStorage(text, false);
        tasksIn.value = "";
      }
    }
  
    function addTask(text, completed) {
      const taskItem = document.createElement("li");
      taskItem.className = `task-item ${completed ? "completed" : ""}`;
      taskItem.textContent = text;
  
      const deletebtn = document.createElement("button");
      deletebtn.textContent = "X";
      deletebtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
        removeStorage(text);
      });
  
      taskItem.appendChild(deletebtn);
      taskItem.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") {
          taskItem.classList.toggle("completed");
          togglecompletedStorage(text);
        }
      });
  
      taskList.appendChild(taskItem);
    }
  
    function saveStorage(text, completed) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ text, completed });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function removeStorage(text) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks = tasks.filter((task) => task.text !== text);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function togglecompletedStorage(text) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const task = tasks.find((task) => task.text === text);
      if (task) task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});