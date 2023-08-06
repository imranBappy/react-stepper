
const TextInput = ({ label, required, errors, name, register, ...rest }) => {
    return (
        <div className=" w-full my-2">
            <label className=" text-md font-semibold" htmlFor={name}>
                {label}
            </label>
            <input {...register(name, required)} className="mt-2  w-full px-2 py-3 rounded border  border-black" {...rest} type="text" id={name} name={name} />
            {errors[name] && <p className=" text-red-500">{errors[name]?.message}</p>}
        </div>
    );
};

export default TextInput;