import TaskProps from "./types";

// LOCAL STORAGE KEY
const LSK = "tasks";

// Updated tasks LSK
const USK = "updatedTasks";

const taskQueries = {
  // Get todos
  getTodos: (): TaskProps[] => {
    const taskRes = localStorage.getItem(LSK);
    return taskRes ? JSON.parse(taskRes) : [];
  },

  // Adding todos
  addTodo: (task: string): TaskProps => {
    const currTodos = taskQueries.getTodos();
    const newTodo: TaskProps = {
      id: Math.floor(Math.random() * 100000000),
      task: task,
      isDone: false,
    };
    const updatedTodos = [...currTodos, newTodo];
    localStorage.setItem(LSK, JSON.stringify(updatedTodos));

    return newTodo;
  },

  // Editing Todos
  editTodo: (task: TaskProps): TaskProps => {
    const todos = taskQueries.getTodos();

    const updateTodos = todos.map((oldTask) =>
      oldTask.id === task.id ? task : oldTask
    );

    localStorage.setItem(LSK, JSON.stringify(updateTodos));
    return task;
  },

  //   Deleting todos
  deleteTodo: (id: number): void => {
    const todos = taskQueries.getTodos();
    const updatedTodos = todos.filter((todo) => todo.id != id);
    localStorage.setItem(LSK, JSON.stringify(updatedTodos));
  },

  deleteCrossedTodo: (id: number): void => {
    const todos = taskQueries.getCrossedOutTodos();
    const updatedTodos = todos.filter((todo: TaskProps) => todo.id != id);
    localStorage.setItem(USK, JSON.stringify(updatedTodos));
  },

  getCrossedOutTodos: () => {
    const taskRes = localStorage.getItem(USK);
    return taskRes ? JSON.parse(taskRes) : [];
  },

  crossOutTodo: (task: TaskProps): TaskProps => {
    const doneTodos = taskQueries.getCrossedOutTodos();
    const newTodo: TaskProps = {
      id: task.id,
      task: task.task,
      isDone: true,
    };
    const updatedTodos = [...doneTodos, newTodo];
    localStorage.setItem(USK, JSON.stringify(updatedTodos));
    taskQueries.deleteTodo(newTodo.id);
    return newTodo;
  },
};

export default taskQueries;
