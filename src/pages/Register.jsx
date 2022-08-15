import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import TextBox from "../components/TextBox";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/api/register/user`, form)
      .then((res) => {
        console.log(res.data);
        console.log("Success");
        alert("Login Success");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-md pt-12 px-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="font-bold text-center uppercase">Register an Account</h1>

        <form action="" className="my-3">
          <div className="mb-3">
            <TextBox
              placeholder={"Firstname"}
              icon={<FaUser />}
              field={"firstName"}
              value={form.firstName}
              handleChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <TextBox
              placeholder={"Middlename"}
              icon={<FaUser />}
              field={"middleName"}
              value={form.middleName}
              handleChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <TextBox
              placeholder={"Lastname"}
              icon={<FaUser />}
              field={"lastName"}
              value={form.lastName}
              handleChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <TextBox
              placeholder={"Address"}
              icon={<FaUser />}
              field={"address"}
              value={form.address}
              handleChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <TextBox
              placeholder={"Email"}
              icon={<FaEnvelope />}
              field={"email"}
              value={form.email}
              handleChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <TextBox
              type={"password"}
              placeholder={"Password"}
              icon={<FaLock />}
              field={"password"}
              value={form.password}
              handleChange={handleChange}
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
