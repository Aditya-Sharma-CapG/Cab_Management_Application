import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Navbar from "./Navbar";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

const CabBookSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="text-center mt-11">
        <h1 className="text-green-600 font-bold font-mono py-10 text-4xl">
          <CelebrationIcon className="mr-2" fontSize="large" /> Booking
          confirmed !
        </h1>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-slate-500 py-10 text-4xl">
          Thank you for choosing Oola cabs 😄
        </h1>
        <p className="text-slate-500 text-medium">
          Check your inbox for cab & ticket details
        </p>
      </div>

      <div className="text-center mt-8 space-x-6">
        <Button onClick={() => navigate("/listCabs")} variant="contained">
          <KeyboardBackspaceIcon className="mr-2" />
          Go back
        </Button>

        <Button onClick={() => navigate("/home")} variant="contained">
          <HomeIcon className="mr-2" />
          Go to Homepage
        </Button>
      </div>

      {/* FOOTER SECTION */}

      <footer className="mt-5">
        <div>
          <div class="text-center">
            <ul class="footer-nav">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">IOS App</a>
              </li>
              <li>
                <a href="#">Android App</a>
              </li>
            </ul>
          </div>

          <div class="">
            <ul class="social-links">
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <GoogleIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <p className="text-gray-400">
            Copyright &copy; 2022 by cma. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default CabBookSuccess;
