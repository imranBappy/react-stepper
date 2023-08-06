import { useForm } from "react-hook-form";
import TextInput from "../UI/TextInput";
import PasswordInput from "../UI/PasswordInput";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const SecurityForm = ({ handleSecurity }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <>
            <h2 className="mx-5 text-center text-4xl font-semibold my-10">Personal Information</h2>
            <form onSubmit={handleSubmit(handleSecurity)} className="mx-5 h-full max-w-2xl  md:m-auto flex items-center flex-col" action="">
                <PasswordInput required={{ required: 'Password required' }} errors={errors} register={register} placeholder='Enter You Password' name={'password'} label={'Password*'} />
                <PasswordInput required={{ required: 'Password required' }} errors={errors} register={register} placeholder='Enter You Confirm Password' name={'confirmPassword'} label={'Confirm Password*'} />


                <Button>Confirm</Button>
            </form>
            <div className=" font-semibold text-center my-7">
                Don’t Have An Account? <Link className="  text-blue-700 underline" to="">Register Now</Link>
            </div>
        </>
    );
};

export default SecurityForm;