import type { UserProps} from "../../types"
import {PATH_API} from "../routes/paths";
import axiosInstance from "./axiosInstance";

export const login = async (email: string, password: string): Promise<{user: UserProps}> => {
    const response = await axiosInstance.post(PATH_API.auth.root, {email, password});
    //setSession(accessToken)

    console.log("response ", response.data)
    return response.data;
    //return {user};
}

export const signup = async (formData: UserProps) => {
    const response = await axiosInstance.post(PATH_API.users.root, formData);
    console.log("data  ", response.data)
    // const {user, accessToken} = response.data;

    localStorage.setItem("accessToken", response.data.email);
}




