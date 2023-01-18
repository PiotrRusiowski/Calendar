import axios from "axios";

export const fetchTasks = (tasks) => ({
  type: "FETCH_TASKS",
  tasks,
});

export const createTask = (product) => (dispatch, getState) => {
  axios
    .post("http://localhost:1337/api/tasks", { data: product })
    .then(() => {
      dispatch(fetchProductsFromAPI());
    })
    .catch((err) => console.log(err));
};

export const fetchProductsFromAPI = () => (dispatch, getState) => {
  axios("http://localhost:1337/api/tasks")
    .then((tasks) => dispatch(fetchTasks(tasks.data.data)))
    .catch((err) => console.log(err));
};
