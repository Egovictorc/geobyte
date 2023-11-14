import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Logo } from '../../../components/logo';
import { Iconify } from '../../../components/iconify';
import navConfig from '../../config-navigation';

const NavMobile = () => {

    const [open, setOpen] = useState(false);

    const location = useLocation()
    useEffect(() => {
        if (open) {
            handleClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (<div className="flex items-center justify-between md:hidden">
        <div className={"flex-1"}>
            <Logo />
        </div>

        <button onClick={handleOpen} className="px-3 mr-1">
            <Iconify icon="eva:menu-2-fill" width="28" />
        </button>

        <NavDrawer
            open={open}
            handleClose={handleClose}
        // handleOpen={handleOpen}
        />
    </div>
    );
}

export default NavMobile


type NavDrawerProps = {
    open: boolean;
    handleClose: () => void;
};

const NavDrawer = ({ open, handleClose }: NavDrawerProps) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="fixed left-0 top-0 h-screen bg-gray-600/50 text-slate-800 overflow-hidden"
                    onMouseDown={handleClose}
                >
                    <div className="bg-white/95  p-4 h-full w-[80%]">
                        <Logo />
                        <div className='flex flex-col mt-6'>
                            {
                                navConfig.map(({ title, path }, index) => (
                                    <Link to={path} key={title} className={"hover:text-slate-700 hover:border-gray-300 ease-in-out duration-200 px-2 py-3 flex flex-nowrap items-center"}>
                                        {title}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
