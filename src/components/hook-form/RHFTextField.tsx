import React from 'react';
import {Input, InputProps} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Controller, useFormContext} from "react-hook-form";


interface Props extends InputProps {
    label: string,
    helperText?: string;
}

const RHFTextField = ({placeholder, type, name, label, helperText}: Props) => {
    const {control} = useFormContext();
    return (
        <Controller
            name={name as string}
            control={control}
            render={({field, fieldState: {error}}) => (
                <div className="grid w-full items-center gap-2 mb-4">
                    <Label htmlFor={name}>{label} </Label>
                    <Input type={type || "text"} id={name} placeholder={placeholder} className={"w-full"} {...field} />
                    <p className=" text-xs italic">
                        {error ? (error?.message && <span className="text-red-500">{error?.message} </span>) :
                            (<span className="text-muted-foreground ">{helperText} </span>)}
                    </p>
                </div>
            )}
        />
    );
};
export default RHFTextField;