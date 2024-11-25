import { axiosTasks } from "../axiosinstance";

export const deleteTasks = async (taskId) => {
    const deleteTask = await axiosTasks.delete(`/deletetask/?taskId=${taskId}`);

    return deleteTask;
};
