import {PATH_API} from "../routes/paths";
import axiosInstance from "./axiosInstance";
import axios from "axios";

export const login = async (email: string, password: string): Promise<{user: UserProps}> => {
    console.log("api path ", PATH_API.users.user(email))
    const res = await axios.get(PATH_API.users.user(email));
    //setSession(accessToken)
    return res.data;
    //return {user};
}

export const signup = async (
    email: string,
    password: string) => {
    const response = await axiosInstance.post(PATH_API.users.root, {
        email,
        password,
    });
    const {user, accessToken} = response.data;

    localStorage.setItem("accessToken", accessToken);
}




