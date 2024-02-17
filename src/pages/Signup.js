import React from "react";
import Template from "../components/Template";

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template
            title="Join Us"
            desc1="asdfgh"
            desc2="asdfghj"
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
};

export default Signup;