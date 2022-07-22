import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CabService from "../services/CabService";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CancelIcon from "@mui/icons-material/Cancel";
import Navbar from "./Navbar";

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
    <>
      <Navbar />
      <div className="addCab">
        <div className="flex max-w-2xl shadow border-b mx-auto">
          <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
              <h1 className=" italic font-bold">
                Add new cab <AddIcon className="px-13 ml-1" />
              </h1>
            </div>
            <br />
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 font-medium mb-1">
                Cab name
              </label>
              <TextField
                type="text"
                name="carName"
                required
                value={cab.carName}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></TextField>
            </div>

            <br />

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 font-medium mb-1">
                Cab type
              </label>
              <TextField
                type="text"
                name="carType"
                value={cab.carType}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></TextField>
            </div>

            <br />

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 font-medium mb-1">
                Rate / km
              </label>
              <TextField
                type="text"
                name="perKmRate"
                value={cab.perKmRate}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></TextField>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-6 py-8">
              <Button
                style={{
                  backgroundColor: "#23b314",
                }}
                variant="contained"
                color="success"
                onClick={saveCab}
              >
                <SaveIcon className="mr-2" />
                Save
              </Button>

              <Button
                style={{
                  backgroundColor: "#FFB6C1",
                }}
                variant="outlined"
                color="error"
                onClick={reset}
              >
                Clear
                <ClearIcon className="ml-2" />
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/cabList")}
              >
                Cancel
                <CancelIcon className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCab;
