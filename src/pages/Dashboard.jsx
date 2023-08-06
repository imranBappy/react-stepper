import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const Dashboard = () => {
    return (
        <div>
            <Link to={'/login'}>
                <Button>Log In</Button>
            </Link>
        </div>
    );
};

export default Dashboard;