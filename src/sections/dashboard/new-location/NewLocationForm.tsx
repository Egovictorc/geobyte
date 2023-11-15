import React, { useCallback, useState } from "react"
import * as Yup from 'yup';
import { Link, redirect, Navigate } from "react-router-dom";

import Select from "react-select"
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from "notistack";
import {v4 as uuidv4 } from "uuid"

import type { API_ERROR } from '../../../../types';

// form
import FormProvider, { RHFPasswordField, RHFTextField, RHFSelectField } from "../../../components/hook-form";
import { PATH_AFTER_LOGIN, PATH_AUTH } from "../../../routes/paths";
import { Iconify } from "../../../components/iconify";
import { login } from '../../../lib/handlers';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { countries } from "../../../lib/countries";


const NewLocationForm = () => {

    const countryNames = countries.map( c => ({value: c.name, label: c.name}));
    const [targetCountry, setTargetCountry] = useState("nigeria")
    const states = countries.find( c => c.name.toLowerCase() === targetCountry.toLowerCase())?.states.map( s => ({value: s.name, label: s.name}))
    
    // const getStates = useCallback( () => {
    //     setStates(countries.find( c => c.name.toLowerCase() === targetCountry.toLowerCase())?.states.map( s => ({value: s.name, label: s.name})) | [] )
    // }, [targetCountry])

    console.log("states ", states)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email must be a valid email address'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const defaultValues: { email: string, password: string, afterSubmit?: string } = {
        email: '',
        password: '',
        afterSubmit: '',
        // confirmPassword: '',
    };

    const methods = useForm<typeof defaultValues>({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;


    const onSubmit: SubmitHandler<typeof defaultValues> = async (values) => {
        login(values.email, values.password)
            .then(res => {
                enqueueSnackbar('login success');
                setIsLoggedIn(true);
            })
            .catch((error) => {
                const err = error as API_ERROR;
                //reset();
                setError('afterSubmit', {
                    ...err,
                    message: err.message,
                });
                enqueueSnackbar({ message: err.message, variant: 'error' });
            })
        //console.log("data ", user)
        // enqueueSnackbar(message);
    };

    const handleChange = (value: string) => {
        console.log("select ", value)
    }
    console.log()

    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
                {/* <Select>
                    <SelectTrigger className="w-full"  onChange={handleChange}>
                        <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            countryNames.map( c => (
                                <SelectItem value={c} key={uuidv4()}>{c} </SelectItem>        
                            ))
                        }
                    </SelectContent>
                </Select> */}
                {/* <Select name="country" aria-label="Country" label="country" onChange={handleChange} options={countryNames} /> */}
                {/* <Select name="state" onChange={handleStateChange} options={states} /> */}
                <RHFSelectField name="country" label="Country" placeholder={"Nigeria"} options={countryNames} />
                <RHFSelectField name="state" label="State" placeholder={"State"} options={states} />


                <RHFTextField name="lga" label="Local Govt" placeholder={"Anioma"} />



                <button
                    className="w-full shadow flex justify-center items-center gap-x-2 text-center  hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-blue-600 text-white font-bold py-3 px-4 rounded transition-all"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Please wait..." : "Add Location"}
                    {isSubmitting && <Iconify icon={"line-md:loading-twotone-loop"} width={20} />}
                </button>

            </FormProvider>
        </>
    );
};

export default NewLocationForm;

