import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
          style={{
            backgroundColor: "#1E90FF",
          }}
          variant="contained"
          size="medium"
          onClick={(e, cabId) => editCab(e, cab.cabId)}
          className="rounded text-white hover:text-gray-300 px-4 hover:cursor-pointer"
        >
          <EditIcon />
        </Button>
        <Button
          style={{
            backgroundColor: "#FFB6C1",
          }}
          variant="outlined"
          color="error"
          onClick={(e, cabId) => deleteCab(e, cab.cabId)}
          className="rounded text-white hover:text-white px-4 hover:cursor-pointer"
        >
          <DeleteForeverIcon />
        </Button>
      </td>
    </tr>
  );
};

export default Cab;
