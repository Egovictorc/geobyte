import React, { ReactNode } from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardFooter from './DashboardFooter'

type Props = {
    children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col justify-center min-h-screen px-3 ">
            <DashboardHeader />
            <main className="flex-1 flex flex-col justify-center  my-auto  container">

                {children}
            </main>
            <DashboardFooter />
        </div>
    )
}


export default DashboardLayout