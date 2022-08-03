import React, { useEffect } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import TextBox from "../components/TextBox";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../store/auth-slice";

const Register = () => {
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    dispatch(authActions.register({ name: "Charles", age: 12 }));
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-md pt-12 px-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="font-bold text-center uppercase">Register an Account</h1>

        <form action="" className="my-3">
          <div className="mb-3">
            <TextBox
              placeholder={"Firstname"}
              icon={<FaUser className="absolute ml-3" />}
            />
          </div>

          <div className="mb-3">
            <TextBox
              placeholder={"Lastname"}
              icon={<FaUser className="absolute ml-3" />}
            />
          </div>

          <div className="mb-3">
            <TextBox
              placeholder={"Email"}
              icon={<FaEnvelope className="absolute ml-3" />}
            />
          </div>

          <div className="mb-3">
            <TextBox
              placeholder={"Username"}
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

          <div className="mb-3">
            <TextBox
              type={"password"}
              placeholder={"Confirm Password"}
              icon={<FaLock className="absolute ml-3" />}
            />
          </div>

          <div className="text-right">
            <button
              onClick={(e) => register(e)}
              className="bg-green-500 text-white px-8 py-2 rounded"
            >
              Register
            </button>
          </div>

          <div className="text-center pb-3 py-6">
            <sub className="flex justify-center">
              <p className="mr-1">Already have account? </p>
              <Link to={"/login"}>
                <p className="text-blue-500 hover:underline">Sign In</p>
              </Link>
            </sub>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
