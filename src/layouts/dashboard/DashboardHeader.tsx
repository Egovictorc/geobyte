import { twMerge } from 'tailwind-merge';
import { NavDesktop, NavMobile } from './nav';

const DashboardHeader = () => {
    const bgColor = 'bg-blue-800/90';
    return (
        <header
            className={twMerge(
                bgColor,
                'z-20 fixed top-0 left-0 right-0 text-white py-5'
            )}
        >
            <div className="container ">
                <NavDesktop />
                <NavMobile />
            </div>
        </header>
    )
}

export default DashboardHeader