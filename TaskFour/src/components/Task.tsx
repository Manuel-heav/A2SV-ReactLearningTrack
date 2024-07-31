import TaskProps from "../types";
import taskQueries from "../Queries";

const Task = ({ task, isDone, id }: TaskProps) => {
  const handleDelete = (): void => {
    if (isDone) {
      taskQueries.deleteCrossedTodo(id);
    } else {
      taskQueries.deleteTodo(id);
    }
  };

  const handleCross = (): void => {
    taskQueries.crossOutTodo({ task, isDone, id });
    console.log(taskQueries.getCrossedOutTodos());
  };

  const handleEdit = (): void => {
    const editedText = prompt("What's your edited text");
    if (editedText) {
      const updatedTodo: TaskProps = {
        id: id,
        task: editedText,
        isDone: isDone,
      };
      taskQueries.editTodo(updatedTodo);
    }
  };

  return (
    <div
      className={
        isDone
          ? "line-through text-[#78CFB0] flex items-center justify-between bg-[#15101C] p-5 rounded-xl mb-5"
          : `flex items-center justify-between bg-[#15101C] p-5 rounded-xl mb-5`
      }
    >
      <div className="flex gap-2">
        {!isDone && (
          <form>
            <button type="submit" onClick={handleEdit}>
              <Edit />
            </button>
          </form>
        )}
        <p>{task}</p>
      </div>
      <form className="flex gap-2 items-center">
        {!isDone && (
          <button type="submit" onClick={handleCross}>
            <Check />
          </button>
        )}
        <button type="submit" onClick={handleDelete}>
          <Delete />
        </button>
      </form>
    </div>
  );
};

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function Delete() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#FF7F7F"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}

function Edit() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
      />
    </svg>
  );
}
export default Task;
