import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [FormData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (FormData.password !== FormData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...FormData
        };

        console.log("Printing Final Account Data");
        console.log(accountData);

        navigate("/dashboard");
    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={submitHandler}>

                <div className="flex w-full gap-4 justify-between mt-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-blue-900 font-semibold mb-1 leading-[1.375rem]">First Name <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={FormData.firstname}
                            className="bg-blue-900 rounded-[0.5rem] text-slate-50 w-full p-[12px]"
                        />
                    </label>

                    <label className="w-full">
                        <p className="text-[0.875rem] text-blue-900 font-semibold mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={FormData.lastname}
                            className="bg-blue-900 rounded-[0.5rem] text-slate-50 w-full p-[12px]"
                        />
                    </label>
                </div>

                <div className="mt-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-blue-900 font-semibold mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email Address"
                            value={FormData.email}
                            className="bg-blue-900 rounded-[0.5rem] text-slate-50 w-full p-[12px]"
                        />
                    </label>
                </div>

                <div className="flex w-full gap-4 justify-between mt-4">

                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-blue-900 font-semibold mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            type={showPassword1 ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={FormData.password}
                            className="bg-blue-900 rounded-[0.5rem] text-slate-50 w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword1((prev) => !prev)}>
                            {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-blue-900 font-semibold mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            type={showPassword2 ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={FormData.confirmPassword}
                            className="bg-blue-900 rounded-[0.5rem] text-slate-50 w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword2((prev) => !prev)}>
                            {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                </div>

                <button className="bg-yellow-500 w-full rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6">
                    Create Account
                </button>
            </form>

        </div>
    )
}

export default SignupForm;