import React from "react";
import { Button, Input } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

function Admin() {
  const navigate = useNavigate();

  const GotoNext = () => {
    navigate("/cabList");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let userInp = e.target.elements.username.value;
    let passInp = e.target.elements.password.value;
    const result = await axios.get("http://localhost:8080/msms/get/Admin");

    for (let i = 0; i < result.data.length; i++) {
      const ento = result.data[i];
      if (userInp === ento.username && passInp === ento.password) {
        GotoNext();
        break;
      } else alert("Invalid username/password");
    }
  }

  return (
    <>
      <cetre>
        <div className="adminlogin">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row text-center">
                <fieldset className="field admin">
                  <h2 className="text-gray-700 text-5xl text-center">
                    Admin Login
                  </h2>
                  <br></br>
                  <br />
                  <Input
                    className="px-2"
                    required
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                  <br />
                  <br></br>
                  <Input
                    className="px-2"
                    required
                    type="text"
                    placeholder="Password"
                    name="password"
                  />
                  <br></br>
                  <br />
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </cetre>

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
    </>
  );
}
export default Admin;
