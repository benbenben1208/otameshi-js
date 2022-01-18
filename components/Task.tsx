import { Task } from '../interfaces/task';
type TaskProps = {
  task: Task;
}
const Task : React.FC<TaskProps> = ({ task })  => {
    console.log(task);
    return (
      <div>
        <span className="text-white">{task.id}</span>
        {" : "}
        <span>
          <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
            {task.task_name}
          </span>
        </span>
      </div>
    );
  }
  export default Task
