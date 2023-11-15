import { LazyLoadImage } from "react-lazy-load-image-component"

import { cn } from "../../lib/utils";
import { Iconify } from "../../components/iconify";

import { SectionDescription, SectionHeading } from "../../components/headings";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../components/ui/dialog";

const services = [
  {
    title: "Item Delivery",
    description: "We ensure safe and fast delivery of items to destinations across the globe",
    image: "/assets/images/home/delivery-man.png",
    excerpts: [{
      title: "Subtitle 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }, {
      title: "Subtitle 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }, {
      title: "Subtitle 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }],
  }, {
    title: "Sales",
    description: "Sales your products to our huge customer base",
    image: "/assets/images/home/shopping-cart.png",
    excerpts: [{
      title: "Subtitle 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }, {
      title: "Subtitle 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }, {
      title: "Subtitle 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }],
  },
  {
    title: "Store",
    description: "Market your product in our store",
    image: "/assets/images/home/supermarket.png",
    excerpts: [{
      title: "Subtitle 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }, {
      title: "Subtitle 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate quos praesentium, voluptatum aperiam rerum doloribus molestias? Similique magni ullam, sit inventore exercitationem quo illum reiciendis vel blanditiis maiores error."
    }],
  },
];


function HomeServices() {


  return (
    <section className="w-full dark:bg-slate-800 py-24">
      <div className="container max-w-screen-xl  text-center px-5">
        <div>

          <SectionHeading title={"Our Services"} />
          <SectionDescription
            description={"Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipitnon, turpis."} />
          <div
            className="flex flex-col md:flex-row items-center md:items-stretch justify-around xl:justify-between py-8 gap-y-16 gap-x-8 flex-wrap">
            {
              services.map(({ title, image, description, excerpts }) => (
                <Card
                  className={cn("w-[90vw] max-w-sm pt-20 pb-12 drop-shadow-xl dark:bg-slate-800 dark:text-slate-200")}
                  key={title}>
                  <CardContent className="py-2 px-10 text-center">
                    <div className={"relative w-24 h-24  mx-auto mb-8"}>
                      <LazyLoadImage src={image} height={96} width={96} alt={title} />
                    </div>
                    <h3 className={"font-semibold text-2xl"}>{title} </h3>
                    <p className={"text-lg lg:text-xl text-slate-600 dark:text-slate-200"}>{description} </p>
                  </CardContent>
                  <CardFooter className={"mt-8 "}>
                    <ServiceDialog excerpts={excerpts} title={title} />

                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;

type ServiceDialogProps = {
  title: string,
  excerpts: { title: string, description: string }[]
}

const ServiceDialog = ({ excerpts, title }: ServiceDialogProps) => {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";


  return (
  <Dialog >
    <DialogTrigger asChild>
      <Button className=" gap-x-1 mx-auto"
        color={"primary"}>
        MORE <span className="self-center">
          <Iconify icon="gg:arrow-right" />
        </span>
      </Button>
    </DialogTrigger>
    <DialogContent>

      <DialogHeader className="flex flex-col gap-1">{title}</DialogHeader>
      <ul className={"flex flex-col gap-y-4"}>
        {
          excerpts.map(({ title, description }) => (
            <li key={title}
              className={"flex gap-x-2 items-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600"}>
              <Iconify icon="gg:arrow-right" className={iconClasses} />
              <div>
                <h6 className={"font-semibold "}>{title} </h6>
                <p className={"text-slate-700 dark:text-slate-400"}>{description} </p>
              </div>
            </li>
          ))}
      </ul>

      <DialogFooter>

      </DialogFooter>

    </DialogContent>
  </Dialog>
  )
}
