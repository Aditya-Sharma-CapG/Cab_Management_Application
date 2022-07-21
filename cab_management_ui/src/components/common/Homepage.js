import React from "react";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

const Homepage = () => {
  return (
    <>
      <header>
        <div className="py-28 text-center landing homepage">
          <div className="container">
            <h1 className="homepagetext">
              <b className="text-5xl underline">Cab Management Tool</b>
            </h1>
          </div>

          <div>
            <p className="text-4xl font-bold text-gray-100 text-center py-20 mt-8">
              <p className="">Welcome to oola Cabs,</p> find the best cab for
              you here.
            </p>
          </div>

          <div className="mt-4 text-center space-x-8">
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: "#20aca5",
                padding: "18px 36px",
                fontSize: "18px",
              }}
              href="/register"
              variant="contained"
            >
              Sign Up
            </Button>
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: "#1e71e6",
                padding: "18px 36px",
                fontSize: "18px",
              }}
              href="/login"
              variant="contained"
            >
              Login
            </Button>
          </div>
        </div>

        <br />
        <br />

        {/* FOOTER SECTION */}

        <footer>
          <div>
            <div class="">
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
            <p>Copyright &copy; 2022 by cma. All rights reserved.</p>
          </div>
        </footer>
      </header>
    </>
  );
};

export default Homepage;
