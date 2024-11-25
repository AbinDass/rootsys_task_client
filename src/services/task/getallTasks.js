import { axiosTasks } from "../axiosinstance";

export const allTasks = async (userId) => {
    console.log(userId,'qwe')
    const taskResponse = await axiosTasks.get(`/alltasks/?userId=${userId}`)

    return taskResponse;
}