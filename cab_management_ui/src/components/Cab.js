import React from "react";
import { useNavigate } from "react-router-dom";

const Cab = ({ cab, deleteCab }) => {
  const navigate = useNavigate();

  const editCab = (e, cabId) => {
    e.preventDefault();
    localStorage.setItem("cabId", cabId);
    navigate(`/editCab/${cabId}`);
  };

  return (
    <tr className="hover:bg-gray-300" key={cab.cabId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm  text-gray-500">{cab.carName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{cab.carType}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">₹ {cab.perKmRate}</div>
      </td>
      <td className="text-right text-sm px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e, cabId) => editCab(e, cab.cabId)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e, cabId) => deleteCab(e, cab.cabId)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Cab;
