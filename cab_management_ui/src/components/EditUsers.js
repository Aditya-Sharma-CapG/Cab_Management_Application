import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { adminId, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch("http://localhost:8080/cab/admin/updateadmin", user);
    navigate("/admindashboard");
  };

  const loadUser = async () => {
    const result = await axios.get(
      "http://localhost:8080/cab/admin/updateadmin"
    );
    setUser(result.data);
  };

  return (
    <div className="text-center">
      <div className="">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 text-4xl text-slate-500">Edit User</h2>
          <br />

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <TextField
                type={"text"}
                required
                className="form-control px-2"
                placeholder="Enter admin id"
                name="adminId"
                value={adminId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <TextField
                type={"text"}
                required
                className="form-control px-4"
                placeholder="Enter email address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <TextField
                type={"password"}
                required
                className="form-control  px-2"
                placeholder="Enter the password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="space-x-4 py-3">
              <Button
                onClick={() => navigate("/admindashboard")}
                variant="contained"
                className="btn btn-outline-primary"
              >
                Submit
              </Button>
              <Button
                variant="contained"
                color="error"
                className=""
                onClick={() => navigate("/admindashboard")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
