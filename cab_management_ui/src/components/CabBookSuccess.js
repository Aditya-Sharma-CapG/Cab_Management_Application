import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CelebrationIcon from "@mui/icons-material/Celebration";

const CabBookSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mt-11">
        <h1 className="text-slate-500 py-10 text-4xl">
          <CelebrationIcon className="" /> Your cab is booked!
        </h1>
      </div>

      <div className="text-center mt-11">
        <h1 className="text-slate-500 py-10 text-4xl">
          Thank you for choosing CMS 😄
        </h1>
      </div>

      <div className="text-center mt-10">
        <Button
          onClick={() => navigate("/listCabs")}
          color="secondary"
          variant="contained"
        >
          Go to Homepage
        </Button>
      </div>
    </>
  );
};

export default CabBookSuccess;
