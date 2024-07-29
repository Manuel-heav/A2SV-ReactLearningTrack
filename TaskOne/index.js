const btn = document.getElementById("btn");
const todosContainer = document.getElementById("todos");
const todoInput = document.getElementById("todoInput");

const todos = [];

function displayElements(todos) {
  todosContainer.innerHTML = "";
  todos.map((todo) => {
    if (todo.done) return;
    const task = document.createElement("div");
    const taskName = document.createElement("h3");
    const finishedBtn = document.createElement("button");
    const editBtn = document.createElement("Button");

    finishedBtn.classList.add("delete");
    editBtn.classList.add("edit");
    task.classList.add("taskContainer");

    taskName.textContent = todo.todo;
    finishedBtn.textContent = "X";
    editBtn.textContent = "Edit";

    finishedBtn.addEventListener("click", () => {
      todos.map((item) => {
        if (item.id === todo.id) {
          item.done = true;
          displayElements(todos);
        }
      });
    });

    editBtn.addEventListener("click", () => {
      todos.map((item) => {
        if (item.id === todo.id) {
          const updated = prompt("Edit your todo");
          item.todo = updated;
          displayElements(todos);
        }
      });
    });

    task.appendChild(taskName);
    task.appendChild(finishedBtn);
    task.appendChild(editBtn);
    todosContainer.appendChild(task);
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = todoInput.value;
  const taskObject = new Object({
    id: todos.length + 1,
    todo: task,
    done: false,
  });
  todos.push(taskObject);
  displayElements(todos);
});
