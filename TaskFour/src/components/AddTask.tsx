import { ChangeEvent, useState } from "react";
import taskQueries from "../Queries";

export const AddTask = () => {
  const [currText, setCurrText] = useState<string>("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCurrText(event.target.value);
  }
  function handleAdd() {
    taskQueries.addTodo(currText);
  }

  return (
    <form className="flex items-center">
      <input
        type="text"
        className="bg-transparent text-white border border-purplish text-sm p-3 rounded-xl outline-none w-80"
        placeholder="Add a new task"
        value={currText}
        onChange={handleInputChange}
      />
      <button
        onMouseEnter={handleAdd}
        // onClick={handleAdd}
        className="text-4xl text-white bg-purplish ml-5 rounded-lg p-1 px-3"
      >
        +
      </button>
    </form>
  );
};
