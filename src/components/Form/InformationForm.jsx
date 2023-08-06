import { useForm } from "react-hook-form";
import TextInput from "../UI/TextInput";
import PasswordInput from "../UI/PasswordInput";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import SelectInput from "../UI/SelectInput";

const InformationForm = ({ handlePersonal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <>
            <h2 className="mx-5 text-center text-4xl font-semibold my-10">Personal Information</h2>
            <form onSubmit={handleSubmit(handlePersonal)} className="mx-5 h-full max-w-2xl  md:m-auto flex items-center flex-col" action="">
                <TextInput required={{ required: 'Email Address required' }} errors={errors} register={register} placeholder='Enter Email Address' name={'email'} label={'Email Address*'} />
                <PasswordInput required={{ required: 'Password required' }} errors={errors} register={register} placeholder='Enter You Password' name={'password'} label={'Password*'} />
                <SelectInput required={{ required: 'Position required' }} errors={errors} register={register} placeholder='Enter Email Address' name={'position'} label={'Position*'} />

                <SelectInput required={{ required: 'Institute required' }} errors={errors} register={register} placeholder='Enter Email Address' name={'institute'} label={'Institute Name*'} />

                <SelectInput required={{ required: 'Institute required' }} errors={errors} register={register} placeholder='Enter Education Level' name={'education'} label={'Education Level*'} />


                <Button>Next</Button>
            </form>
            <div className=" font-semibold text-center my-7">
                Don’t Have An Account? <Link className="  text-blue-700 underline" to="">Register Now</Link>
            </div>
        </>
    );
};

export default InformationForm;