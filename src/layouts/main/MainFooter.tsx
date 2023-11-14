import {Link} from 'react-router-dom';


// components
import {Iconify} from '../../components/iconify';
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import { COMPANY_INFO } from '../../../config-global';
import {_socials} from "../../../_mock"

const {address} = COMPANY_INFO;

const LINKS = [
    {
        headline: 'Partners',
        children: [
            {name: 'Hiring Partners', path: "#"},
            {name: 'Sponsors', path: '#'},
        ],
    },
    {
        headline: 'Legal',
        children: [
            {name: 'Terms and Condition', path: '/'},
            {name: 'Privacy Policy', path: '/'},
        ],
    },
    {
        headline: 'Quick Links',
        children: [
            {name: 'Home', path: '/'},
            {name: 'About', path: '/'},
        ],
    },
    {
        headline: 'Contact',
        children: [
            {name: COMPANY_INFO.support, path: '#'},
            {
                name: address,
                path: '#',
            },
        ],
    },
];

const MainFooter = () => {
    return (
        <footer className="w-full px-5 py-16 border-t dark:border-slate-700">
            <div className={"lg:container flex flex-col"}>

            <p className="font-bold">Geobyte</p>
                <div className="flex flex-col sm:flex-row gap-x-8 gap-y-8 justify-between mt-5">
                    <div className="flex flex-col flex-1 max-w-sm gap-y-4">
                        <p>{COMPANY_INFO.description} </p>
                        <article className="flex flex-col gap-y-1">
                            <b>Let&apos;s stay in touch</b>
                            <span>Subscribe to our news letter</span>
                            <div className={"flex gap-x-2"}>
                                <Input placeholder={"Email Address"} type={"email"}/>
                                <Button >Subscribe</Button>
                            </div>

                        </article>
                        <div className="flex justify-between max-w-[200px] py-5 text-primary-500 dark:text-slate-300">
                            {_socials.map(({icon, path, name, value}) => (
                                <Link to={path} key={name} className="">
                                    <Iconify icon={icon} key={name}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap basis-3/5 gap-x-3  gap-y-4  justify-between">
                        {LINKS.map(({headline, children}) => (
                            <div key={headline} className={"max-w-[200px]"}>
                                <h5 className={"font-semibold uppercase whitespace-nowrap"}>{headline}</h5>
                                {children.map(({name, path}) => (
                                    <ul key={name}>
                                        <li>
                                            <Link to={path}
                                                  className={"hover:opacity-90 text-sm hover:underline dark:text-slate-300"}>{name}</Link>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <span className={"block py-2"}>© {new Date().getFullYear()}. All rights reserved</span>
            </div>
        </footer>
    );
};

export default MainFooter;
