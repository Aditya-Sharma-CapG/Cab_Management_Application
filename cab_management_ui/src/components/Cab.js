import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Cab = ({ cab, deleteCab }) => {
  const navigate = useNavigate();

  const editCab = (e, cabId) => {
    e.preventDefault();
    localStorage.setItem("cabId", cabId);
    navigate(`/editCab/${cabId}`);
  };

  return (
    <tr
      className=" bg-gray-100 hover:bg-gray-300 hover:delay-75"
      key={cab.cabId}
    >
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-1xl  text-gray-500 hover:delay-75">
          {cab.carName}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 hover:delay-75">
          {cab.carType}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 hover:delay-75">
          ₹ {cab.perKmRate}
        </div>
      </td>
      <td className="text-right text-sm px-6 py-4 whitespace-nowrap space-x-2">
        <Button
          variant="contained"
          size="medium"
          onClick={(e, cabId) => editCab(e, cab.cabId)}
          className="rounded text-white hover:text-gray-300 px-4 hover:cursor-pointer"
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={(e, cabId) => deleteCab(e, cab.cabId)}
          className="rounded text-white hover:text-white px-4 hover:cursor-pointer"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Cab;
