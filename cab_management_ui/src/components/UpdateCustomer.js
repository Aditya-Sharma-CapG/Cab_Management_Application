import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import Navbar from "./Navbar";

const UpdateCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomers] = useState({
    id: id,
    username: "",
    password: "",
    village: "",
    phone: "",
    name: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setCustomers({ ...customer, [e.target.name]: value });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerService.getCustomerById(id);
        setCustomers(response.fetchData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const updateCustomer = (e) => {
    e.preventDefault();
    CustomerService.updateCustomer(customer, id)
      .then((response) => {
        navigate("/customerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="=flex max-w-2xl mx-auto shadow border-b my-8">
        <div className="px-8 py-8">
          <div className="font-thin text-2xl tracking-wider">
            <h1>Update Customer</h1>
          </div>
          <div className="=items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              User Name
            </label>
            <input
              type="text "
              name="username"
              value={customer?.username}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="=items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Password
            </label>
            <input
              type="text "
              name="password"
              value={customer?.password}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="=items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              City
            </label>
            <input
              type="text"
              name="village"
              value={customer?.village}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="=items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Mobile Number
            </label>
            <input
              type="text"
              name="phone"
              value={customer?.phone}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="=items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={customer?.name}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>
          <div className="=items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              onClick={updateCustomer}
              className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-2 "
            >
              {" "}
              Save
            </button>
            <button
              onClick={() => navigate("/customerList")}
              className=" rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-2 "
            >
              {" "}
              Cancel
            </button>
          </div>
          {/* <div className='=items-center justify-center h-14 w-full my-4'>
           
        </div> */}
        </div>
      </div>
    </>
  );
};

export default UpdateCustomer;
