import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CabService from "../services/CabService";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const UpdateCab = () => {
  const { cabId } = useParams();
  const navigate = useNavigate();
  const [cab, setCab] = useState({
    cabId: cabId,
    carName: "",
    carType: "",
    perKmRate: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCab({ ...cab, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CabService.getCabById(
          localStorage.getItem("cabId")
        );
        setCab(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateCab = (e) => {
    e.preventDefault();
    console.log(cab);
    CabService.updateCab(cab, cabId)
      .then((response) => {
        navigate("/cabList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto bg-gray-200">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1 className="antialiased italic font-medium">
            Update cab <EditIcon />
          </h1>
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
          <Button
            variant="contained"
            color="success"
            onClick={updateCab}
            className="rounded text-white font-semibold"
          >
            Update
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate("/cabList")}
            className="rounded text-white font-semibold"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCab;
