import { Button } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const AdminLandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="container mx-auto my-12">
        <div className="h-12 mt-6 ">
          <h1 className="rounded bg-blue-500 hover:bg-blue-700 text-center font-serif text-white px-6 py-2 font-semibold">
            Admin Page
          </h1>
        </div>

        <div className="flex shadow border-b mt-10">
          <table className="min-w-full">
            <thead className="">
              <tr className="">
                <th className="text-left text-gray-500 text-2xl font-bold uppercase tracking-wider py-3 px-6">
                  Modules
                </th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr className=" bg-gray-100 hover:bg-gray-300 hover:delay-75">
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    Show customers list
                  </div>
                </td>
                <td className="text-right text-sm px-6 py-4 whitespace-nowrap space-x-2">
                  <Button
                    style={{
                      backgroundColor: "#1E90FF",
                    }}
                    onClick={() => navigate("/customerList")}
                    variant="contained"
                    size="medium"
                    className="rounded text-white hover:text-gray-300 px-4 hover:cursor-pointer"
                  >
                    Show
                  </Button>
                </td>
              </tr>

              <tr className=" bg-gray-100 hover:bg-gray-300 hover:delay-75">
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    Show cabs list
                  </div>
                </td>

                <td className="text-right text-sm px-6 py-4 whitespace-nowrap space-x-2">
                  <Button
                    style={{
                      backgroundColor: "#1E90FF",
                    }}
                    onClick={() => navigate("/cabList")}
                    variant="contained"
                    size="medium"
                    className="rounded text-white hover:text-gray-300 px-4 hover:cursor-pointer"
                  >
                    Show
                  </Button>
                </td>
              </tr>

              <tr className=" bg-gray-100 hover:bg-gray-300 hover:delay-75">
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    Show drivers list
                  </div>
                </td>

                <td className="text-right text-sm px-6 py-4 whitespace-nowrap space-x-2">
                  <Button
                    style={{
                      backgroundColor: "#1E90FF",
                    }}
                    variant="contained"
                    size="medium"
                    className="rounded text-white hover:text-gray-300 px-4 hover:cursor-pointer"
                  >
                    Show
                  </Button>
                </td>
              </tr>

              <tr className=" bg-gray-100 hover:bg-gray-300 hover:delay-75">
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    Show bookings list
                  </div>
                </td>

                <td className="text-right text-sm px-6 py-4 whitespace-nowrap space-x-2">
                  <Button
                    style={{
                      backgroundColor: "#1E90FF",
                    }}
                    onClick={() => navigate("/tripBookingList")}
                    variant="contained"
                    size="medium"
                    className="rounded text-white hover:text-gray-300 px-4 hover:cursor-pointer"
                  >
                    Show
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminLandingPage;
