import React from "react";
import google from "../assets/Google svg.png";
import fb from "../assets/Facebook svg.png";
import logo from "../assets/Frame 249.png";

const GetStarted = () => {
  return (
    <div>
      <img className="hidden md:block m-10" src={logo} alt="" />
      <div className="m-8 text-center md:w-1/2 lg:w-1/3 md:mx-auto">
        <h1 className="text-3xl font-bold md:hidden">Create an account</h1>
        <h1 className="text-3xl font-bold hidden md:block">Log in or SignUp</h1>
        <p className="text-sm py-5">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
        <div className="flex items-center justify-center gap-4 border border-black rounded-lg p-2">
          <img src={google} alt="" />
          <p>Continue with google</p>
        </div>
        <div className="flex items-center justify-center gap-4 border border-black rounded-lg p-2 mt-5">
          <img src={fb} alt="" />
          <p>Continue with facebook</p>
        </div>

        <div className="mt-10">
          <p className="border border-r"></p>
          <p className="">or</p>
          <p className="border border-l"></p>
        </div>

        <form className="flex flex-col gap-3">
          <label htmlFor="email" className="text-start">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-500 rounded-lg p-2"
          />
          <label htmlFor="password" className="text-start">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-500 rounded-lg p-2"
          />
          <button className="block md:hidden bg-bluee text-white rounded-lg p-2 mt-4">
            Create an account
          </button>
          <button className="hidden md:block bg-bluee text-white rounded-lg p-2 mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-bluee underline mt-14 md:hidden">
          Continue as a Guest
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
