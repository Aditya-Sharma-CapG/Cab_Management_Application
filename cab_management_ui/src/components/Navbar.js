import React from "react";
import { useNavigate } from "react-router-dom";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-500">
      <div className="h-16 flex items-center">
        <p
          onClick={() => navigate("/home")}
          className="text-white font-bold px-11 text-2xl hover:cursor-pointer"
        >
          <LocalTaxiIcon className="text-white mr-2" fontSize="large" />
          CMS
        </p>
      </div>
    </div>
  );
};

export default Navbar;
