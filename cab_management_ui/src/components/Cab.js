import React from "react";

const Cab = ({ cab, deleteCab }) => {
  return (
    <tr key={cab.cabId}>
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
        <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteCab(e, cab.cabId)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Cab;

// 1:59:25
