import { ReactNode, createContext, useCallback, useMemo, useReducer } from "react";
import { PATH_API } from "../routes/paths";
import axiosInstance from "../lib/axiosInstance";
import { UserProps } from "../../types";



const initState: {user: UserProps | null, isAuthenticated: boolean} = {
    user: null ,
    isAuthenticated: false,
}

export const AuthContext = createContext<({
    login: (email: string, password: string) => void;
    signup: (
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        role: string,
    ) => void;
    logout: () => void
} & typeof initState) | null>(null)


type ReducerAction = {
    type: "LOGIN" | "SIGNUP" | "LOGOUT";
    payload: typeof initState;
};

const authReducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: true
            }
        }
        case "SIGNUP": {
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: true
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        }
        default: {
            return state;
        }
    }

}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initState)
    const login = useCallback(async (email: string, password: string) => {
        const response = await axiosInstance.post(PATH_API.auth.root, { email, password });
        //setSession(accessToken)


        dispatch({
            type: "LOGIN",
            payload: {
                user: response.data,
                isAuthenticated: true
            }
        })
        console.log("response ", response.data)
        // return response.data;
        //return {user};
        localStorage.setItem("accessToken", response.data.email);
    }, [])

    const signup = useCallback(async (email: string,
        firstName: string, lastName: string,
        password: string,
        role: string
        ) => {
        const response = await axiosInstance.post(PATH_API.users.root, { email, password, firstName, lastName, role });
        console.log("data  ", response.data)
        // const {user, accessToken} = response.data;
        dispatch({
            type: "LOGIN",
            payload: {
                user: response.data,
                isAuthenticated: true
            }
        })
        localStorage.setItem("accessToken", response.data.email);
    }, [])

    // LOGOUT
    const logout = useCallback(() => {
        // setSession(null);
        dispatch({
            type: "LOGOUT",
            payload: {
                user: null,
                isAuthenticated: false
            }
        });
    }, []);

    const memoizedValue = useMemo(() => ({
        login, signup,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        logout
    }), [state.user, state.isAuthenticated, login, logout, signup])

    return (
        <AuthContext.Provider value={memoizedValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;