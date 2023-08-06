
const Button = ({ children, outline }) => {
    return (
        <button className={`py-4 px-4 w-full mt-5 font-semibold rounded  border text-xl ${outline ? '  border-primary text-primary' : 'bg-primary  text-white'}`}>
            {children}
        </button>
    );
};

export default Button;