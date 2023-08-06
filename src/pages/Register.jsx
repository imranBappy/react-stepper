import OuterNavbar from "../components/Navbar/OuterNavbar";

import InformationForm from "../components/Form/InformationForm";
import Stepper from "../components/Stepper/Stepper";
import { useState } from "react";
import SecurityForm from "../components/Form/SecurityForm";
import ConfirmationForm from "../components/Form/ConfirmationForm";

const Register = () => {

    const [step, setStep] = useState({
        personal: "active",
        security: "",
        confirmation: "",
    });

    const [personal, setPersonal] = useState({});
    const [security, setSecurity] = useState({});

    const handlePersonal = (data) => {
        setPersonal(data);
        setStep({
            ...step,
            personal: "done",
            security: "active",
        });
    };
    const handleSecurity = (data) => {
        setSecurity(data)
        setStep({
            ...step,
            security: "done",
            confirmation: "active",
        });
    };


    let content = <InformationForm handlePersonal={handlePersonal} />;
    if (step.security === "active") {
        content = <SecurityForm handleSecurity={handleSecurity} />;
    }
    if (step.confirmation === "active") {
        content = <ConfirmationForm />;
    }


    return (
        <div>
            <OuterNavbar />
            <Stepper step={step} />
            {
                content
            }
        </div >
    );
};

export default Register;