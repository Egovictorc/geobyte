function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const API_ROOT = `/api/v1`;

export const PATH_AUTH = {
    root: "/auth",
    login: path("/auth", '/login'),
    signup: path("/auth", '/signup'),
    resetPassword: path("/auth", '/reset-password'),
};

export const PATH_PAGE = {
    about: '/about-us',

    // auth pages
    login: path("/", "auth/login"),
    signup: path("/", "auth/signup"),
}

export const PATH_API = {
    auth: {
        login: path(API_ROOT, `/auth/login`),
        logout: path(API_ROOT, `/auth/logout`),
        myAccount: path(API_ROOT, `/auth/my-account`),
        createAccount: path(API_ROOT, '/auth/create-account'),
    },
    staff: {
        root: path(API_ROOT, '/staff'),
        get: (email: string) => path(API_ROOT, `/staff/${email}`),

    },

}
export const PATH_DASHBOARD = {
    //root: "/dashboard",
    root: "/dashboard",
    user: {
        root: "/dashboard",
        account: path("/dashboard", "/account"),
        new: path("/dashboard", "/account"),
        profile: path("/dashboard", '/user/profile'),

    },
 
}

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.root;