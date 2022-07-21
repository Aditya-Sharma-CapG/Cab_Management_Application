import React from "react";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 flex items-center">
        <p className="text-white font-bold px-11">
          <LocalTaxiIcon className="text-white mr-2" />
          Cab Management System
        </p>
      </div>
    </div>
  );
};

export default Navbar;
