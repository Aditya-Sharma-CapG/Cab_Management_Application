import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CabService from "../services/CabService";

const AddCab = () => {
  const [cab, setCab] = useState({
    cabId: "",
    carName: "",
    carType: "",
    perKmRate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCab({ ...cab, [e.target.name]: value });
  };

  const saveCab = (e) => {
    e.preventDefault();
    CabService.saveCab(cab)
      .then((response) => {
        console.log(response);
        navigate("/cabList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setCab({
      cabId: "",
      carName: "",
      carType: "",
      perKmRate: "",
    });
  };

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add new cab</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <lable className="block text-gray-600 text-sm font-normal">
            Cab name
          </lable>
          <input
            type="text"
            name="carName"
            value={cab.carName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <lable className="block text-gray-600 text-sm font-normal">
            Cab type
          </lable>
          <input
            type="text"
            name="carType"
            value={cab.carType}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <lable className="block text-gray-600 text-sm font-normal">
            Rate / km
          </lable>
          <input
            type="text"
            name="perKmRate"
            value={cab.perKmRate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-6 py-5">
          <button
            onClick={saveCab}
            className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700"
          >
            Save
          </button>

          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCab;
