/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import Loginform from './Loginform';
import Signupform from './Signupform';
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    // const toggleForm = () => {
    //     setIsLogin(!isLogin);
    // };

    
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500 text-white bg-common-blue p-4 ">
            <div className=" flex flex-col w-full max-w-md text-white rounded-lg shadow-lg overflow-hidden h-full md:h-auto">
                <div className="flex justify-center items-center bg-red-700 p-4 capitalize">
                    <button
                        className={`flex-1 text-center py-2 px-4 ${
                            isLogin ? "bg-red-500" : "bg-red-700"
                        } hover:bg-red-600 transition-colors duration-300`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 text-center py-2 px-4 ${
                            !isLogin ? "bg-red-500" : "bg-red-700"
                        } hover:bg-red-600 transition-colors duration-300`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>
                <div className="p-6 bg-white text-black flex-grow rounded-b-lg">
                    {isLogin ? (
                        <Loginform />
                    ) : (
                        <Signupform  onSignup={(data) => console.log("Signup data:", data)} />
                    )}
                    <Link    to='/'><h2 className="py-3 text-center capitalize text-blue-400 cursor-pointer font-medium">
                        <span className="flex items-center justify-center">
                            <span>back to home</span>
                            <span className="ml-2">
                                <IoArrowBackOutline />
                            </span>
                        </span>
                    </h2></Link>
                </div>
            </div>
        </div>
    );
}

export default Auth
