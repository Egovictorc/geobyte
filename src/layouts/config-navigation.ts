import { PATH_AUTH, PATH_PAGE } from "../routes/paths";

const navConfig = [
    {
        title: 'About us',
        icon: "ic:sharp-account-circle",
        path: PATH_PAGE.about,
    },
    {
        title: 'Contact us',
        icon: "entypo:mail",
        path: "/",
    },
    {
        title: 'Sign up',
        icon: "ic:baseline-login",
        path: PATH_AUTH.signup,
    },
    {
        title: 'Sign in',
        icon: "ic:baseline-login",
        path: PATH_AUTH.login,
    },
]

export default navConfig;