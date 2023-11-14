import {PATH_API} from "../routes/paths";
import axiosInstance from "./axiosInstance";
import axios from "axios";

export const login = async (email: string, password: string): Promise<{user: UserProps}> => {
    console.log("api path ", PATH_API.staff.get(email))
    const res = await axios.get(PATH_API.staff.get(email));
    //setSession(accessToken)
    return res.data;
    //return {user};
}

export const signup = async (formData: UserProps) => {
    const response = await axiosInstance.post(PATH_API.staff.root, formData);
    const {user, accessToken} = response.data;

    localStorage.setItem("accessToken", accessToken);
}




