import axios from "axios";

export const getAllTasksData = async () => {
  const tasks = await axios
    .get("http://localhost/api/user/task")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return tasks;
};

export const getAllTasksIds = async () => {
  const tasks = await axios
    .get("http://localhost/api/user/task")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    };
  });
};
export const getTaskData = async (id) => {
  const task = await axios
    .get(`http://localhost/api/user/task/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
    return {
        task
    }
};
