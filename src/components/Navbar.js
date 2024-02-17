import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {toast} from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='bg-slate-100 flex justify-between items-center px-4 py-4 mx-auto w-screen'>

            <Link className="px-8" to="/">
                <img src={logo} alt="Logo" loading="lazy" />
            </Link>

            <nav>
                <ul className="flex justify-between items-center gap-x-10 text-blue-600 font-bold text-2xl">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4 px-10">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-blue-800 text-white py-[8px]  
                            px-[12px] rounded-[8px] bg-grey-700 border border-white">
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button  className="bg-blue-800 text-white py-[8px]  
                            px-[12px] rounded-[8px] bg-grey-700 border border-white">
                            Sign Up
                        </button>
                    </Link> 
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button className="bg-blue-900 text-white py-[8px]  
                            px-[12px] rounded-[8px] bg-grey-700 border border-white" onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button  className="bg-blue-900 text-white py-[8px]  
                            px-[12px] rounded-[8px] bg-grey-700 border border-white">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    );
};

export default Navbar;