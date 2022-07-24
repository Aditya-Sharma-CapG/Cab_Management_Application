import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import { Link, useParams } from "react-router-dom";

export default function AdminDashboard() {
  const { id } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/cab/admin/getAll");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/cab/admin/deleteadmin/${id}`);
    loadUsers();
  };

  return (
    <header className="space-x-10">
      <nav className="text-center text-gray-500 text-3xl space-x-2">
        <a className="" href="#">
          Admin Dashboard
        </a>
        <button
          className=""
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="space-x-2" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Button
              variant="contained"
              className="py-4 text-medium nav-item nav-link active"
              href="/adminsignup"
            >
              Add Admin
            </Button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto grid place-items-center">
        <div className="py-4">
          <p className="text-gray-700 text-center mt-5 text-2xl">
            List of Admins
          </p>
          <table className="table-fixed border shadow mt-3">
            <thead className="">
              <tr className="font-sans">
                <th
                  className="text-slate-600 table-row-group font-semibold mr"
                  scope="col"
                >
                  #
                </th>
                <th className="text-slate-600 font-semibold mr" scope="col">
                  Admin ID
                </th>
                <th className="text-slate-600 font-semibold mr" scope="col">
                  Email
                </th>
                <th className="text-slate-600 font-semibold mr" scope="col">
                  Password
                </th>
                <th className="text-slate-600 font-semibold mr" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody align="center">
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.adminId}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to="/editadmins"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.adminId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
}
