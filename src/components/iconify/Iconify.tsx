"use client";
import {Icon, IconifyIcon, IconProps} from "@iconify/react";
import React from "react";
import {cn} from "@/lib/utils";
import {icons} from "lucide-react";


const Iconify = ({ icon, color, width, className, ...props }: IconProps) => {
    return <Icon icon={icon} color={color || "inherit"} width={width || "16"} className={cn(className)} {...props} />;
};

export default Iconify;
