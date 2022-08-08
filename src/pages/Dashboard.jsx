import React, { useEffect, useRef, useState } from "react";
import { FaCoffee, FaCoins } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import TextBox from "../components/TextBox";
import { policyActions } from "../store/policy-slice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const listPolicies = useSelector((state) => state.policy.policies);
  const [policy, setPolicy] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setPolicy({ ...policy, [name]: value });
  };

  const storePolicy = (e) => {
    e.preventDefault();
    dispatch(policyActions.store(policy));
    reset();
  };

  const reset = () => {
    setPolicy({ name: "", price: "" });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Policy System</h1>

        <form className="my-1" onSubmit={(e) => storePolicy(e)}>
          <TextBox
            placeholder={"Policy name"}
            icon={<FaCoins className="absolute ml-3" />}
            handleChange={handleChange}
            field="name"
            value={policy.name}
          />
          <TextBox
            placeholder={"Policy price"}
            icon={<FaCoins className="absolute ml-3" />}
            handleChange={handleChange}
            field="price"
            value={policy.price}
          />
          <div className="text-left my-3">
            <button
              type="submit"
              className="py-1 px-3 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>

        <ul>
          {listPolicies.map((item, id) => (
            <li
              key={id}
              className="flex justify-between shadow-md py-2 px-4 mb-1"
            >
              <h1 className="font-bold">{item.name}</h1>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
