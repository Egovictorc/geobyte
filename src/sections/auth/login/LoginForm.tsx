import React, { useState } from "react"
import type { API_ERROR, UserProps } from '../../../../types';
import * as Yup from 'yup';
import { Link, redirect, Navigate, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from "notistack";

// form
import FormProvider, { RHFPasswordField, RHFTextField } from "../../../components/hook-form";
import { PATH_AFTER_LOGIN, PATH_AUTH } from "../../../routes/paths";
import { Iconify } from "../../../components/iconify";
// import { login } from '../../../lib/handlers';
import useAuthContext from "../../../context/useAuthContext";


const LoginForm = () => {
    const navigate = useNavigate()
    const { isAuthenticated, login } = useAuthContext();

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
        try {
            await login(values.email, values.password)
        } catch (error) {
            const err = error as API_ERROR;
            //reset();
            setError('afterSubmit', {
                ...err,
                message: err.message,
            });
            enqueueSnackbar({ message: err.message, variant: 'error' });
        }

        navigate(PATH_AFTER_LOGIN);
        //console.log("data ", user)
        // enqueueSnackbar(message);
    };

    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
                <RHFTextField name="email" label="Email address" placeholder={"johndoe@gmail.com"} />
                <RHFPasswordField name="password" label="Password" />
                <div className="flex justify-between mb-4">
                    <div className="w-1/2 flex items-center">
                        <input type="checkbox" name="remeberMe" />&nbsp;
                        <label htmlFor="remeberMe">Remember me</label>
                    </div>
                    <div className="">
                        <Link className="text-primary-main" to={PATH_AUTH.resetPassword}>Forgot password?</Link>
                    </div>
                </div>

                <button
                    className="w-full shadow flex justify-center items-center gap-x-2 text-center  hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-blue-600 text-white font-bold py-3 px-4 rounded transition-all"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Please wait..." : "Login"}
                    {isSubmitting && <Iconify icon={"line-md:loading-twotone-loop"} width={20} />}
                </button>

            </FormProvider>
        </>
    );
};

export default LoginForm;

