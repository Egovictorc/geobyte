import { Link } from "react-router-dom"

import { Logo } from "../../../components/logo";
import navConfig from "../../config-navigation";


const NavDesktop = () => {
  return (<div className="items-center justify-between hidden md:flex">
  <Logo/>
  <div className="flex">
    {
        navConfig.map( ({title, path}) => (
            <Link to={path} key={title}  className={"hover:text-slate-300 hover:border-gray-300 ease-in-out duration-200 px-2 flex flex-nowrap items-center "}>
            {title}
            </Link>
        ))
    }
    </div>
 
</div>)
}

export default NavDesktop;