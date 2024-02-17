import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({title, desc1, desc2, formtype, setIsLoggedIn}) => {
    return (
        <div className="flex flex-col items-center w-6/12 h-full py-12 mx-auto gap-x-12 gap-y-0">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-blue-900 font-semibold text-[1.875rem] leading-[2.375rem]">
                    {title}
                </h1>
                <p className="text=[1.125rem] leading[1.625rem] mt-4">
                    <span className="text-blue-600">
                        {desc1}
                    </span>
                    <br />
                    <span className="text-blue-800 italic">
                        {desc2}
                    </span>
                </p>
                {formtype === "signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            </div>
        </div>
    )
}

export default Template;