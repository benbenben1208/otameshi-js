import Link from "next/link";
import { getAllTasksData } from "../lib/tasks";
import Task from "../components/Task";
import { NextPage, GetStaticProps } from "next";
import { Task as TaskType } from "../interfaces/task";
type TaskPageProps = {
  allTasksData: [TaskType];
}
const TaskPage: NextPage<TaskPageProps> = ({ allTasksData }) => {
  return (
    <div className="flex  flex-1  items-center w-screen flex-col mt-3">
      <div className="max-w-md w-full space-y-8">
        <div className="rounded-md shadow-sm -space-y-px">
          <ul>
            {allTasksData &&
              allTasksData.map((task) => <Task key={task.id} task={task} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TaskPage;

export const getStaticProps: GetStaticProps = async () => {
  const allTasksData = await getAllTasksData();
  return {
    props: { allTasksData },
  };
};
