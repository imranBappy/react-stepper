import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
const OuterNavbar = () => {
    return (
        <nav className=" w-full h-[100px]  shadow ">
            <div className="mx-5 h-full max-w-7xl  xl:m-auto flex items-center">
                <Link to="/" className="flex items-center justify-between h-16">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
        </nav>
    );
};

export default OuterNavbar;