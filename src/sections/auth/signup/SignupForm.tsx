import type { API_ERROR } from '../../../../types';
import * as Yup from 'yup';

// form
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from "notistack";


// components
import FormProvider, { RHFPasswordField, RHFTextField } from "../../../components/hook-form";
// utils
import { PATH_AFTER_LOGIN } from '../../../routes/paths';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../../context/useAuthContext';

const SignupForm = () => {

    const {signup } = useAuthContext();
    const navigate = useNavigate()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First Name is required"),
        lastName: Yup.string()
            .required("Last Name is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .required("Confirm password is required")
            // .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            .oneOf([Yup.ref("password"), ""], "Passwords must match"),
    });

    const defaultValues: {
        confirmPassword: string,
        email: string,
        firstName: string,
        lastName: string,
        password: string,
        afterSubmit?: string
    } = {

        firstName: "",
        lastName: "",
        email: '',
        password: "",
        confirmPassword: "",
        afterSubmit: "",
    };

    const methods = useForm<typeof defaultValues>({
        resolver: yupResolver(SignupSchema),
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
        console.log("values ", values)
        try {
            signup(
                 values.email,
                values.firstName,
                values.lastName,
                values.password,
                "STAFF"
            )
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
        // enqueueSnackbar(message);
        enqueueSnackbar('Account created successfully');

    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
            <RHFTextField name="firstName" label="First Name" placeholder={"john"} />
            <RHFTextField name="lastName" label="Last Name" placeholder={"Doe"} />
            <RHFTextField name="email" label="Email address" placeholder={"johndoe@gmail.com"} />
            <RHFPasswordField name="password" label="Password" />
            <RHFPasswordField name="confirmPassword" label="Confirm Password" />
            <div className="flex justify-between mb-4">
                <div className="w-1/2">
                    <input type="checkbox" name="remeberMe" />&nbsp;
                    <label htmlFor="remeberMe">Remeber me</label>
                </div>
            </div>

            <button
                className="w-full shadow flex justify-center items-center gap-x-2 text-center  hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-blue-600 text-white font-bold py-3 px-4 rounded transition-all"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Please wait" : "Create now"}
            </button>
        </FormProvider>
    );
}
    ;

export default SignupForm;