import { axiosTasks } from "../axiosinstance";

export const updateTaskStatus = async (taskId, status) => {
    const response = await axiosTasks.put(`/update/?taskId=${taskId}`, { status });
    return response.data; 
};