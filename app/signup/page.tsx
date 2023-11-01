"use client";
import React, { useState } from "react";
import SignLayout from "../components/signLayout";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

import { ZodError } from "zod";
import { ValidateSignin } from "../helpers/validations";

interface Errors {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  general: string;
}

const Signup = () => {
  const [errors, setErrors] = useState<Errors>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    // console.log(data);

    try {
      const validatedData = ValidateSignin.parse(data);
      console.log(validatedData);
    } catch (err: any) {
      console.log(err.issues);

      if (err instanceof ZodError) {
        const errorMessages: Errors = {} as Errors;
        err.issues.forEach((issue: any) => {
          errorMessages[issue.path[0] as keyof Errors] = issue.message;
        });
        setErrors({ ...errorMessages, general: "" });
      } else {
        setErrors({ ...errors, general: "An error occurred." });
      }
    }
  };

  return (
    <div>
      <SignLayout>
        <div className="flex flex-col justify-center items-center h-full gap-10 w-3/4 m-auto py-5">
          <div className="space-y-2">
            <h1 className="text-center font-extrabold text-3xl">
              Welcome back
            </h1>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit
            </p>
          </div>
          <form
            id="form"
            className="w-full space-y-3"
            onSubmit={onSubmitHandler}
          >
            <div>
              <div className="rounded-xl flex relative">
                <input
                  name="username"
                  type="text"
                  placeholder="username"
                  className={`w-full px-3 py-2 rounded-lg border focus:outline-none ${
                    errors.username && "border-red-500"
                  }`}
                />
                <span className="icon flex items-center absolute inset-y-0 right-0 pr-3">
                  <HiOutlineUser size={25} />
                </span>
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm text-center">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
              <div className="rounded-xl flex relative">
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="w-full px-3 py-2 rounded-lg border focus:outline-none"
                />
                <span className="icon flex items-center absolute inset-y-0 right-0 pr-3">
                  <HiAtSymbol size={25} />
                </span>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm text-center">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <div className="rounded-xl flex relative">
                <input
                  name="password"
                  placeholder="password"
                  id="password"
                  className="w-full px-3 py-2 rounded-lg border focus:outline-none"
                  type={showPassword.password ? "text" : "password"}
                />
                <span className="flex items-center absolute inset-y-0 right-0 pr-3">
                  <label htmlFor="password">
                    <HiFingerPrint
                      size={25}
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          password: !showPassword.password,
                        })
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm text-center">
                  {errors.password}
                </p>
              )}
            </div>
            <div>
              <div className="rounded-xl flex relative">
                <input
                  name="confirmPassword"
                  placeholder="confirm password"
                  id="confirmPassword"
                  className="w-full px-3 py-2 rounded-lg border focus:outline-none"
                  type={showPassword.confirmPassword ? "text" : "password"}
                />
                <span className="flex items-center absolute inset-y-0 right-0 pr-3">
                  <label htmlFor="password">
                    <HiFingerPrint
                      size={25}
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          confirmPassword: !showPassword.confirmPassword,
                        })
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm text-center">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="flex pt-5">
              <input
                type="submit"
                placeholder="login"
                className="m-auto bg-gradient-to-r from-blue-500 to-indigo-500 w-full py-2 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 ease-in-out"
                value={"sign in"}
              />
            </div>
            {errors.general && (
              <p className="text-red-500 text-sm text-center">
                Password does not match/ an error occured
              </p>
            )}
          </form>
          <div className="flex lg:flex-row flex-col gap-5">
            <button className="bg-slate-200 flex justify-center items-center px-3 py-2 gap-2 rounded-lg font-sans">
              sign up with google
              <img src="./assets/google.svg" alt="" className="w-5" />
            </button>
            <button className="bg-slate-200 flex justify-center items-center px-3 py-2 gap-2 rounded-lg font-sans">
              sign up with GitHub
              <img src="./assets/github.svg" alt="" className="w-5" />
            </button>
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <Link href={"/signin"} className="text-purple-800">
                Login
              </Link>
            </p>
          </div>
        </div>
      </SignLayout>
    </div>
  );
};

export default Signup;
