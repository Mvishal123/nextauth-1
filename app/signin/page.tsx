"use client"
import React, { useState } from "react";
import SignLayout from "../components/signLayout";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <SignLayout>
        <div className="flex flex-col justify-center items-center h-full gap-10 w-3/4 m-auto">
          <div className="space-y-2">
            <h1 className="text-center font-extrabold text-3xl">
              Welcome back
            </h1>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit
            </p>
          </div>
          <form action="" className="w-full space-y-3">
            <div className="rounded-xl flex relative">
              <input
                type="text"
                placeholder="username"
                className="w-full px-3 py-2 rounded-lg border focus:outline-none"
              />
              <span className="icon flex items-center absolute inset-y-0 right-0 pr-3">
                <HiAtSymbol size={25} />
              </span>
            </div>
            <div className="rounded-xl flex relative">
              <input
                placeholder="password"
                id="password"
                className="w-full px-3 py-2 rounded-lg border focus:outline-none"
                type={showPassword ? "text" : "password"}
              />
              <span className="flex items-center absolute inset-y-0 right-0 pr-3">
                <label htmlFor="password">
                  <HiFingerPrint
                    size={25}
                    onClick={toggleShowPassword}
                    style={{ cursor: "pointer" }}
                  />
                </label>
              </span>
            </div>
            <div className="flex pt-5">
              <input
                type="submit"
                placeholder="login"
                className="m-auto bg-gradient-to-r from-blue-500 to-indigo-500 w-full py-2 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 ease-in-out"
                value={"sign in"}
              />
            </div>
          </form>
          <div className="flex lg:flex-row flex-col gap-5">
            <button className="bg-slate-200 flex justify-center items-center px-3 py-2 gap-2 rounded-lg font-sans">
              sign in with google
              <img src="./assets/google.svg" alt="" className="w-5" />
            </button>
            <button className="bg-slate-200 flex justify-center items-center px-3 py-2 gap-2 rounded-lg font-sans">
              sign in with GitHub
              <img src="./assets/github.svg" alt="" className="w-5" />
            </button>
          </div>
          <div>
            <p>
              Don't have an account?{" "}
              <Link href={"/signup"} className="text-purple-800">
                Register
              </Link>
            </p>
          </div>
        </div>
      </SignLayout>
    </div>
  );
};

export default Signin;
