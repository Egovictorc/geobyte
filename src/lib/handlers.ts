import {PATH_API} from "../routes/paths";
import axiosInstance from "./axiosInstance";

export const addLocation = async (country: string, state: string, lga: string) => {
    const response = await axiosInstance.post(PATH_API.locations.root, {country, state, lga});
    console.log("data  ", response.data)
    // const {user, accessToken} = response.data;

    localStorage.setItem("accessToken", response.data.email);
}




