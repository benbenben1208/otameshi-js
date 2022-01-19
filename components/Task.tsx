import { Task } from "../interfaces/task";
import { useState } from 'react';
type TaskProps = {
  task: Task;
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const [isDone, setIsDone] = useState(task.is_done);

  const statusChange = () => {
    setIsDone(!isDone);
  }
  const taskDelete = () => {

  }
  return (
    <div>
      <span className="text-white">{task.id}</span>
      {" : "}
      <span>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
          {task.task_name}
        </span>
      </span>
      {isDone ? (
        <button onClick= { statusChange } className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          完了
        </button>
      ) : (
        <button onClick={ statusChange } className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          未完了
        </button>
      )}
      <button onClick={ taskDelete } className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        削除
      </button>
    </div>
  );
};
export default Task;
