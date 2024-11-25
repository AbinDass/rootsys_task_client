import { axiosAuth } from "../axiosinstance";

export const signUp = async (userData) => {
    const signupResponse = await axiosAuth.post(`/register`, userData)
    return signupResponse;
}