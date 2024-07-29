const btn = document.getElementById("btn") as HTMLInputElement;
const todosContainer = document.getElementById("todos") as HTMLInputElement;
const todoInput = document.getElementById("todoInput") as HTMLInputElement;

interface Todo {
    id: number,
    todo: string,
    done: boolean
}

const todos: Todo[] = [];

function displayElements(todos: Todo[]) {
  if (todosContainer) 
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
          if (updated)
          item.todo = updated;
          displayElements(todos);
        }
      });
    });

    task.appendChild(taskName);
    task.appendChild(finishedBtn);
    task.appendChild(editBtn);
    if (todosContainer)
        todosContainer.appendChild(task);
  });
}


if (btn)
btn.addEventListener("click", (e) => {
  e.preventDefault();

  const task = todoInput.value;
  const taskObject: Todo = {
    id: todos.length + 1,
    todo: task,
    done: false,
  };
  todos.push(taskObject);
  displayElements(todos);
});
