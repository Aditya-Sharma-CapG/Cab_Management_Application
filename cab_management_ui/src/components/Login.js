import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Input } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

function Login() {
  let navigate = useNavigate();
  const GotoNext = () => {
    navigate("/listCabs");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let userInp = e.target.elements.username.value;
    let passInp = e.target.elements.password.value;
    const result = await axios.get("http://localhost:8080/msms/get/customer");
    let bool = false;
    for (let i = 0; i < result.data.length; i++) {
      const ento = result.data[i];
      if (userInp === ento.username && passInp === ento.password) {
        console.log("user login successful");
        bool = !bool;
        break;
      }
    }

    if (bool) {
      GotoNext();
    } else alert("Invalid username/password");
  }

  return (
    <>
      <center>
        <div className="Login bg-gray-500 mb-100">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <fieldset className="field">
                <h2 className="text-gray-700 text-5xl text-bold">Login Page</h2>
                <br />
                <div className="row">
                  <Input
                    className="py-2 px-4"
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                  />
                </div>
                <div className="row">
                  <Input
                    className="py-2 px-2"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: 35,
                    backgroundColor: "#20aca5",
                    padding: "8px 20px",
                    fontSize: "18px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Login
                </Button>
                <br />
                <Button>
                  <Link className="px-2" to="/Adminlogin">
                    Admin Login
                  </Link>
                </Button>
                <br />
                <Button
                  className="py-4"
                  variant="contained"
                  href="/registration"
                >
                  New Register
                </Button>
              </fieldset>
            </form>
          </div>
        </div>

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
      </center>
    </>
  );
}
export default Login;
