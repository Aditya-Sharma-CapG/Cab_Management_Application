import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

const Cab_s = ({ cab }) => {
  const navigate = useNavigate();

  return (
    <tr className="hover:bg-gray-300" key={cab.cabId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm  text-gray-700">{cab.carName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-700">{cab.carType}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-700">₹ {cab.perKmRate}</div>
      </td>
      <td className="text-right px-5">
        <Button onClick={() => navigate("/pageBooked")} variant="contained">
          Book
        </Button>
      </td>
    </tr>
  );
};

export default Cab_s;
