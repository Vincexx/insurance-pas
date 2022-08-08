import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import TextBox from "../components/TextBox";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-md pt-12 px-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="font-bold text-center uppercase">
          Policy Administration System
        </h1>
        <form action="" className="my-3">
          <div className="mb-1">
            <TextBox placeholder={"Username or Email"} icon={<FaUser />} />
          </div>

          <div className="mb-3">
            <TextBox
              type={"password"}
              placeholder={"Password"}
              icon={<FaLock />}
            />
          </div>

          <div className="text-right">
            <button
              onClick={(e) => handleLogin(e)}
              className="bg-green-500 text-white px-8 py-2 rounded"
            >
              Login
            </button>
          </div>

          <div className="text-center pb-3 py-6">
            <sub className="flex justify-center">
              <p className="mr-1">Dont have account yet? </p>
              <Link to={"/register"}>
                <p className="text-blue-500 hover:underline">Sign Up</p>
              </Link>
            </sub>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
