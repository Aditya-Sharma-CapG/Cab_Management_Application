import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CabService from "../services/CabService";
import Button from "@mui/material/Button";

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
          <h1 className="antialiased italic font-medium">Add new cab</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Cab name
          </label>
          <input
            type="text"
            name="carName"
            value={cab.carName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Cab type
          </label>
          <input
            type="text"
            name="carType"
            value={cab.carType}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Rate / km
          </label>
          <input
            type="text"
            name="perKmRate"
            value={cab.perKmRate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-6 py-5">
          <Button variant="contained" color="success" onClick={saveCab}>
            Save
          </Button>

          <Button variant="outlined" color="error" onClick={reset}>
            Clear
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate("/cabList")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCab;
