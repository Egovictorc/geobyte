import {icons, LucideIcon, LucideProps} from "lucide-react";
import {cn} from "@/lib/utils";
import React from "react";

interface IconProps extends LucideProps {
    name: keyof typeof icons;
}

const Icon = ({ size, color, name, className}: IconProps) => {
    const AppIcon = icons[name];
    return <AppIcon  size={size || 16} className={cn("", className)} />;
}

export  default Icon