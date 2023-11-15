import { ReactNode } from "react";
import MainHeader from "../main/MainHeader";

type Props = {
    children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
            
        <div className="flex flex-col justify-center min-h-screen px-3 ">
            <MainHeader />
            <main className="flex-1 flex flex-col justify-center  my-auto  max-w-lg container">
            {children}
            </main>
            
        <footer className={'w-full h-20'}>
                <span className={"block py-2 text-center"}>© {new Date().getFullYear()}. All rights reserved</span>
            </footer>
        </div>
    );
};

export default AuthLayout;