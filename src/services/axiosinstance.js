import Axios from "axios";

const axiosUser = Axios.create({
    baseURL: "http://localhost:8000/",
});

const axiosTasks = Axios.create({
    baseURL: "http://localhost:8000/tasks",
});

const axiosAuth = Axios.create({
    baseURL: "http://localhost:8000/auth",
});

export { axiosTasks, axiosUser,axiosAuth };
