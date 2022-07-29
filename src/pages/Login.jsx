import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import TextBox from "../components/TextBox";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-md pt-12 px-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="font-bold text-center uppercase">
          Policy Administration System
        </h1>

        <form action="" className="my-3">
          <div className="mb-1">
            <TextBox
              placeholder={"Username or Email"}
              icon={<FaUser className="absolute ml-3" />}
            />
          </div>

          <div className="mb-3">
            <TextBox
              type={"password"}
              placeholder={"Password"}
              icon={<FaLock className="absolute ml-3" />}
            />
          </div>

          <div className="text-right">
            <button className="bg-green-500 text-white px-8 py-2 rounded">
              Login
            </button>
          </div>

          <div className="text-center py-3">
            <sub>
              Don't have account yet?{" "}
              <a href="google.com" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </sub>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
