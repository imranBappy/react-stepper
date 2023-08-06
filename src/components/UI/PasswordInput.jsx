import { useState } from 'react';
import { BiShow } from 'react-icons/bi'
import { AiOutlineEyeInvisible } from 'react-icons/ai'



const PasswordInput = ({ label, name, register, errors, required, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    }
    return (
        <div className=" w-full my-2">
            <label className=" text-md font-semibold" htmlFor={name}>
                {label}
            </label>
            <div className="mt-2 w-full rounded border relative  border-black">
                <input   {...register(name, required)} className="rounded w-full flex-grow  px-2 pr-10 py-3 " {...rest} type={showPassword ? 'text' : 'password'} id={name} name={name} />
                <button onClick={handleShowPassword} className=" top-[14px] right-[-5px] absolute w-9 m-auto  text-xl text-center ">
                    {showPassword ? <AiOutlineEyeInvisible /> : <BiShow />}
                </button>
            </div>
            {errors[name] && <p className=" text-red-500">{errors[name]?.message}</p>}

            {/* <p className=" text-red-500">There was an error</p> */}
        </div>
    );
};

export default PasswordInput;