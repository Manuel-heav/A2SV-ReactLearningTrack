import { useState } from "react";
import taskQueries from "../Queries";
import TaskProps from "../types";
import { AddTask } from "./AddTask";
import Task from "./Task";

export const ListContainer = () => {
  const todos = taskQueries.getTodos();
  const [crossedOut, setCrossedOut] = useState<TaskProps[]>(
    taskQueries.getCrossedOutTodos()
  );

  return (
    <div className="bg-[#1D1825] p-12 mt-5 rounded-xl">
      <AddTask />

      <div>
        <h1 className="text-white text-sm my-5">
          Uncompleted Tasks - {todos.length}
        </h1>
        {todos.map((todo) => (
          <Task
            key={todo.id}
            task={todo.task}
            isDone={todo.isDone}
            id={todo.id}
          />
        ))}
        <h1 className="text-white text-sm my-5">Done - {crossedOut.length}</h1>
        {crossedOut.map((todo) => (
          <Task
            key={todo.id}
            task={todo.task}
            isDone={todo.isDone}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
};
