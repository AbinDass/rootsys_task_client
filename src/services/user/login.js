import { axiosAuth } from "../axiosinstance";

export const logIn = async (userData) => {
    const loginResponse = await axiosAuth.post(`/login`, userData)
    console.log(loginResponse,124)

    return loginResponse;
}