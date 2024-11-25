import { axiosTasks } from "../axiosinstance";

export const addTasks = async (taskObj) => {
    const addedTask = await axiosTasks.post(`/create`, taskObj);
    console.log(addedTask, "added");

    return addedTask;
};
