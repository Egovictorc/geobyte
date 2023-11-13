"use client"
import React, {HtmlHTMLAttributes} from 'react';
import {motion } from "framer-motion"

import {cn} from "@/lib/utils";
import {varFade} from "@/components/animate";

interface  DescriptionProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    description: string
}
const SectionDescription = ({description, children, className}: DescriptionProps) => {
    return (
        <motion.p className={cn("mt-4 text-xl lg:text-2xl mb-12 px-4 max-w-screen-md mx-auto", className)} {...varFade().inUp}>
            {description}
            {children}
        </motion.p>
    );
};

export default SectionDescription;