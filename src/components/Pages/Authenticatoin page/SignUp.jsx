import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";
import { useNavigate } from "react-router-dom";
const SignUp = () =>
{
    const navigate=useNavigate();
    return (
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: "3",ease:easeOut, scale: { type: "bounce", visualDuration: "0.4" } }} className="flex flex-col items-center justify-center ">
            <div className="bg-black shadow-lg p-8  rounded-lg w-full max-w-md">
                <div className="justify-center flex">
                    <h1 className="font-semibold rounded p-2 w-40 bg-white text-black text-3xl mb-6 text-center">Sign Up</h1>
                </div>
                <form className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label className="font-medium text-sm">Full Name</label>
                            <input

                                type="text"
                                className="focus:border-blue-600  focus:outline-none border-2 rounded-md p-2 w-full text-sm"
                                placeholder="Pratham"

                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="font-medium text-sm">Last Name</label>
                            <input
                                type="text"
                                className="focus:border-blue-600  focus:outline-none border-2 rounded-md p-2 w-full text-sm"
                                placeholder="Pandey"
                            />
                        </div>
                        
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium text-sm">Department</label>
                        <input
                            type="text"
                            className="focus:border-blue-600  focus:outline-none border-2 rounded-md p-2 w-full text-sm"
                            placeholder="Eg: Information Technology"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium text-sm">Semester</label>
                        <input
                            type="number"
                            className="focus:border-blue-600  focus:outline-none border-2 rounded-md p-2 w-full text-sm"
                            placeholder="Eg: 5"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium text-sm">E-mail</label>
                        <input
                            type="email"
                            className="focus:border-blue-600  focus:outline-none border-2 rounded-md p-2 w-full text-sm"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium text-sm">Password</label>
                        <input
                            type="password"
                            className="focus:border-blue-600  focus:outline-none border-2 rounded-md p-2 w-full text-sm"
                            placeholder="********"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium text-sm">Confirm Password</label>
                        <input
                            type="password"
                            className=" border-2 focus:border-blue-600  focus:outline-none rounded-md p-2 w-full text-sm"
                            placeholder="********"
                        />
                    </div>

                    <button  className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                        Sign Up
                    </button>
                </form>
            </div>
            <h1 onClick={()=>navigate("/signin")} className="cursor-pointer">Already have an account !</h1>

        </motion.div>
    );
};

export default SignUp;
