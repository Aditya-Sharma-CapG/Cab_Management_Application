import React, { useEffect, useState } from "react";
import CabService from "../services/CabService";
import { useParams, useNavigate } from "react-router-dom";

const BookCab = () => {
  const { cabId } = useParams();
  const navigate = useNavigate();
  const [cab, setCab] = useState({
    cabId: cabId,
    carName: "",
    carType: "",
    perKmRate: "",
  });

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

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Confirm cab details</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Cab name
          </label>
          <input
            type="text"
            name="carName"
            disabled={true}
            value={cab.carName}
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
            disabled={true}
            value={cab.carType}
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
            disabled={true}
            value={cab.perKmRate}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-6 py-5">
          <button
            onClick={() => navigate("/pageBooked")}
            className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700"
          >
            Book
          </button>

          <button
            onClick={() => navigate("/listCabs")}
            className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCab;
