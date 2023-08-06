
const SelectInput = ({ label, required, errors, name, register, ...rest }) => {
    return (
        <div className=" w-full my-2">
            <label className=" text-md font-semibold" htmlFor={name}>
                {label}
            </label>

            <select className="mt-2  w-full px-2 py-3 rounded border  border-black" {...rest} {...register(name, required)} d={name} name={name}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
            </select>
            {errors[name] && <p className=" text-red-500">{errors[name]?.message}</p>}
        </div>
    );
};

export default SelectInput;