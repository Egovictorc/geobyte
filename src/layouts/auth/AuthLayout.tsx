import React, {ReactNode } from "react";

type Props = {
    children: ReactNode
}

const AuthLayout = ({children}: Props) => {
    return (
        <div className={"flex flex-col h-screen w-full text-primary-main"}>
            {/* <MainHeader bg={"bg-primary-main/90"}/> */}
            {/*
              <header className={"flex w-full justify-between"}>
                <Logo/>
            </header>*/}
            <main className={"w-full h-full flex justify-center items-center pt-20"}>
                <div className={"flex flex-col w-full px-3 max-w-[500px] "}>
                    {children}
                </div>
            </main>
            <footer className={'w-full h-20 bg-[url("assets/backgrounds/auth-bg.svg")]'}>
                

            </footer>
        </div>
    );
};

export default AuthLayout;