import * as Yup from 'yup';
import uniq from "lodash/uniq"
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from "notistack";

import type { API_ERROR } from '../../../../types';

// form
import FormProvider, {  RHFTextField, RHFSelectField } from "../../../components/hook-form";
import { Iconify } from "../../../components/iconify";
import { addLocation } from '../../../lib/handlers';
import { countries } from "../../../lib/countries";


const NewLocationForm = () => {

    const countryNames = uniq(countries.map( c => (c.name)));
        
    const { enqueueSnackbar } = useSnackbar()
    const NewLocationSchema = Yup.object().shape({
        country: Yup.string()
            .required('Country is required'),
        state: Yup.string()
            .required('State is required'),
        lga: Yup.string()
            .required('LGA is required'),
        afterSubmit: Yup.string()
    });

    const defaultValues: { country: string, state: string, afterSubmit?: string, lga: string } = {
        country: '',
        state: '',
        lga: "",
        afterSubmit: '',
        // confirmPassword: '',
    };

    const methods = useForm<typeof defaultValues>({
        resolver: yupResolver(NewLocationSchema),
        defaultValues,
    });

    const {
        setError,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = methods;
    const selectedCountry = watch("country", "Nigeria");
    const rawStates = countries.find(({ name }) => name.toLowerCase() === selectedCountry.toLowerCase())?.states || [];
    const _states = rawStates.map( s => (s.name));

    const onSubmit: SubmitHandler<typeof defaultValues> = async (values) => {
        try {
            console.log("values ", values);
            await addLocation(values.country, values.state, values.lga)
        } catch(error) {
                const err = error as API_ERROR;
                //reset();
                setError('afterSubmit', {
                    ...err,
                    message: err.message,
                });
                enqueueSnackbar({ message: err.message, variant: 'error' });
            }
        //console.log("data ", user)
        // enqueueSnackbar(message);
    };

    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
                <RHFSelectField name="country" label="Country" placeholder={"Nigeria"} options={countryNames} />
                <RHFSelectField name="state" label="State" placeholder={"State"} options={_states} />


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

