import * as Yup from 'yup';
import {Link, redirect} from "react-router-dom";

import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSnackbar} from "notistack";


// form
import FormProvider, {RHFPasswordField, RHFTextField} from "../../../components/hook-form";
import {PATH_AFTER_LOGIN, PATH_AUTH} from "../../../routes/paths";
import {Iconify} from "../../../components/iconify";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import { login } from '../../../lib/handlers';


const LoginForm = () => {

    const {enqueueSnackbar, closeSnackbar} = useSnackbar()
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
        formState: {errors, isSubmitting, isSubmitSuccessful},
    } = methods;


    const onSubmit: SubmitHandler<typeof defaultValues> = async (values) => {
        if (navigator.onLine) {
            try {

                await login(values.email, values.password);
                //console.log("data ", user)

                // enqueueSnackbar(message);
                enqueueSnackbar('login success');
                redirect(PATH_AFTER_LOGIN)
            } catch (error) {
                const err = error as API_ERROR;
                //reset();
                setError('afterSubmit', {
                    ...err,
                    message: err.message,
                });
                enqueueSnackbar({message: err.message, variant: 'error'});
            }
        } else {
            enqueueSnackbar({message: 'You are offline', variant: 'error'});
        }
    };

    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500"}>{errors.afterSubmit.message} </p>)}
                <RHFTextField name="email" label="Email address" placeholder={"johndoe@gmail.com"}/>
                <RHFPasswordField name="password" label="Password"/>
                <div className="flex justify-between mb-4">
                    <div className="w-1/2 flex items-center">
                        <input type="checkbox" name="remeberMe"/>&nbsp;
                        <label htmlFor="remeberMe">Remember me</label>
                    </div>
                    <div className="">
                        <Link className="text-primary-main" to={PATH_AUTH.resetPassword}>Forgot password?</Link>
                    </div>
                </div>

                <button
                    className="w-full shadow flex justify-center items-center gap-x-2 text-center  hover:bg-primary-dark focus:shadow-outline focus:outline-none bg-primary-main text-white font-bold py-3 px-4 rounded"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Please wait..." : "Login"}
                    {isSubmitting && <Iconify icon={"line-md:loading-twotone-loop"} width={20}/>}
                </button>
            </FormProvider>
        </>
    );
};

export default LoginForm;

