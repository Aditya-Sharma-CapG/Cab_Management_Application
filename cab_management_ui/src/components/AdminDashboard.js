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
        <div className="overflow-x-auto relative">
          <p className="text-gray-700 text-center mt-5 text-2xl">
            List of Admins
          </p>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="font-sans">
                <th className="py-3 px-6" scope="col">
                  Sr. No.
                </th>
                <th className="py-3 px-6" scope="col">
                  Admin ID
                </th>
                <th className="py-3 px-6" scope="col">
                  Email
                </th>
                <th className="py-3 px-6" scope="col">
                  Password
                </th>
                <th className="py-3 px-6" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody align="center">
              {users.map((user, index) => (
                <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-400">
                  <th
                    scope="row"
                    key={index}
                    class="py-4 px-6 font-medium text-900 whitespace-nowrap dark:text-black"
                  >
                    {index + 1}
                  </th>
                  <td>{user.adminId}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td class="py-4 px-6">
                    <div className="space-x-2">
                      <Link
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        to="/editadmins"
                      >
                        Edit
                      </Link>
                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => deleteUser(user.adminId)}
                      >
                        Delete
                      </button>
                    </div>
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
