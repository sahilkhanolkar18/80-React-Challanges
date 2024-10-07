import { useReducer } from "react";

const reducer = (tasks: any, action: any) => {
  switch (action.type) {
    case "add":
      if (action.task) {
        return [...tasks, action.task];
      }
      return tasks;
    case "update":
      return tasks.map((task: any) =>
        task.id === action.id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      );
    case "delete":
      return tasks.filter((task: any) => task.id !== action.id);
    default:
      throw new Error("This action type isn't supported.");
  }
};

const createTask = (title: string) => {
  return {
    id: Date.now(),
    title,
    status: "pending",
  };
};

const Challenge33 = () => {
  const [tasks, dispatch] = useReducer(reducer, []);

  const handleUpdateTaskStatus = (id: number) => {
    dispatch({ type: "update", id });
  };

  const handleDeleteTask = (id: number) => {
    dispatch({ type: "delete", id });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const taskTitle = formData.get("task") as string;
    if (taskTitle.trim()) {
      dispatch({ type: "add", task: createTask(taskTitle) });
      e.currentTarget.reset();
    }
  };

  return (
    <div className="p-4 w-[600px] m-auto mt-20">
      <h1 className="text-2xl font-semibold mb-4 text-[white]">Task Manager</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex justify-between gap-2">
        <input
          name="task"
          placeholder="Task title"
          className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
        />
        <button
          className="px-4 py-2 rounded bg-[#f3a007] hover:bg-[#f59f008a] w-[150px]"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ul className="mt-4">
        {tasks.map((task: any) => (
          <li
            key={task.id}
            className="flex items-center justify-between mb-2 text-[white] mt-3 bg-[#72557c] p-3 rounded-md"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 rounded accent-[#f3a007]"
                checked={task.status === "completed"}
                onChange={() => handleUpdateTaskStatus(task.id)}
              />
              <span
                className={task.status === "completed" ? "line-through" : ""}
              >
                {task.title}
              </span>
            </div>
            <button
              className=" text-[white] mr-5 px-2 py-1 bg-[#c54343] rounded"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenge33;
