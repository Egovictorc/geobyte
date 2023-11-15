import { Link, useNavigate } from "react-router-dom"

import { Logo } from "../../../components/logo";
import useAuthContext from "../../../context/useAuthContext";
import { Button } from "../../../components/ui/button";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import { PATH_AUTH } from "../../../routes/paths";


const NavDesktop = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuthContext();

    console.log("user ...", user)


    console.log("user ", user)
    return (<div className="items-center justify-between hidden md:flex">
        <Logo />
        <div className="flex">


            {user &&
                <Avatar>
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback>{user.firstName[0]} </AvatarFallback>
                </Avatar>
            }

            <Button variant={"link"} onClick={() => {
                logout()
                navigate(PATH_AUTH.login);
            }} className="ml-2 text-slate-300">Logout</Button>
        </div>

    </div>)
}

export default NavDesktop;