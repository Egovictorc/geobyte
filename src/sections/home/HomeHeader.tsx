import { LazyLoadImage } from 'react-lazy-load-image-component';
import CountUp from "react-countup";
import {Link} from "react-router-dom";

import {PATH_AUTH} from "../../routes/paths";
import {Button, buttonVariants} from "../../components/ui/button";


const HomeHeader = () => {
    return (
        <header className={"flex flex-col md:flex-row h-screen justify-center items-center md:justify-end gap-x-12 py-16 px-4"}>
            <div className="flex max-w-[500px] basis-2/5 flex-col justify-center gap-y-12 text-center md:text-left">
                <h1 className={"text-5xl lg:text-6xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight"}>
                    Safe and Fast Delivery with{" "}
                    <span className={"uppercase text-primary-600"}>GeoByte</span>
                </h1>
                <p className={"text-2xl"}>
                    We offer the best delivery experience. Products are delivered safely to your doorpost
                </p>

                {
                    /*
                    <Button className="self-center md:self-start lg:text-lg" size="lg" color={"primary"} radius={"full"}>
                    Create Now
                </Button>
                    * */
                }
               <Button asChild className={""}>
                   <Link className={buttonVariants({  className: "self-center md:self-start lg:text-lg "})} color={"primary"}  to={PATH_AUTH.signup}>
                       Book Now
                   </Link>
               </Button>
                <div className="flex justify-between">
                    {[
                        {count: 1400, label: "Products Delivered", suffix: "+"},
                        {count: 100, label: "Happy Clients",  suffix: "+"},
                        {count: 100, label: "Customer Satisfaction",  suffix: "%"},
                    ].map(({count, label, suffix}) => (
                        <p key={label} className="flex flex-col">
                            {/*<b className="text-2xl">{count}{suffix}</b>*/}
                            <CountUp end={count} suffix={suffix} className={"text-2xl font-semibold"} />
                            <span> {label}</span>
                        </p>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex relative basis-3/5 w-full h-[450px] lg:h-[900px] self-center">
                <LazyLoadImage height={450} 
                    src={"/assets/images/home/home_hero.png"}
                    alt="Home hero"
                    className="object-contain"
                    />
            </div>
        </header>
    );
};

export default HomeHeader;
