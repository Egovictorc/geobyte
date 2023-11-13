"use client"
import { motion } from "framer-motion"
import React, {HtmlHTMLAttributes} from 'react';
import {cn} from "@/lib/utils";
import {varFade} from "@/components/animate";

interface Props extends HtmlHTMLAttributes<HTMLHeadingElement> {
    title: string;
};

const SectionHeading = ({title, children, className}: Props) => {
    return (
        <motion.div className={cn(className)} {...varFade().inDown}>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight" {...varFade().inDown}> {title} </h2>
            {children}
        </motion.div>
    );
};
{
    /*
      <div className="text-primary-main mb-10 flex flex-col w-[300px] bg-yellow-500">
        <h2 className="font-semibold text-3xl"> {title} </h2>
        <p className="mt-1 w-1/3 h-1 text-red-400 bg-primary-main basis-1/3 inline-block"  />
    </div>
     */
}

export default SectionHeading;
