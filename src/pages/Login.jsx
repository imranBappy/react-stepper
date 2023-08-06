import { Link } from "react-router-dom";
import OuterNavbar from "../components/Navbar/OuterNavbar";
import Button from "../components/UI/Button";
import PasswordInput from "../components/UI/PasswordInput";
import TextInput from "../components/UI/TextInput";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <OuterNavbar />
            <h1 className="mx-5 text-center text-4xl font-semibold my-10">Welcome To Task Job</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-5 h-full max-w-2xl  md:m-auto flex items-center flex-col" action="">
                <TextInput required={{ required: 'Email Address required' }} errors={errors} register={register} placeholder='Enter Email Address' name={'email'} label={'Email Address*'} />
                <PasswordInput required={{ required: 'Password required' }} errors={errors} register={register} placeholder='Enter You Password' name={'password'} label={'Password*'} />

                <Button>Log In</Button>
            </form>
            <div className=" font-semibold text-center my-7">
                Don’t Have An Account? <Link className="  text-blue-700 underline" to="/register">Register Now</Link>
            </div>
        </div>
    );
};

export default Login;