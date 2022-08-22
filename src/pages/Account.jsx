import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { fetchAllAccounts, userActions } from "../store/user-slice";
import { useDispatch } from "react-redux/es/exports";

const Account = () => {
  const header = [
    "Account #",
    "Firstname",
    "Middlename",
    "Lastname",
    "Email",
    "Address",
    "Edit",
    "Delete",
  ];
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.allUsers);

  const fetchAccounts = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/users`)
      .then((res) => {
        console.log(res.data);
        dispatch(userActions.getAllUsers(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <>
      <div className="md:w-3/4 md:mt-24 md:pr-10 md:pl-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl mb-3">Manage Accounts</h1>
          <Button btnName={"Add Account"} />
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {header.map((item, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {item.accountNumber ? item.accountNumber : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.firstName ? item.firstName : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.middleName ? item.middleName : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.lastName ? item.lastName : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.email ? item.email : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.address ? item.address : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
