import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CabService from "../services/CabService";
import Cab from "./Cab";
import AddIcon from "@mui/icons-material/Add";

const ListCab = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [cabs, setCabs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CabService.getCabs();
        setCabs(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteCab = (e, cabId) => {
    e.preventDefault();
    CabService.deleteCab(cabId).then((res) => {
      if (cabs) {
        setCabs((prevElement) => {
          return prevElement.filter((cab) => cab.cabId !== cabId);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12 mt-6 ">
        <button
          onClick={() => navigate("/addCab")}
          className="rounded bg-slate-600 hover:bg-slate-900 text-white px-6 py-2 font-semibold"
        >
          Add Cab
          <AddIcon className="px-13 ml-2" />
        </button>
      </div>

      <div className="flex shadow border-b mt-3">
        <table className="min-w-full">
          <thead className="bg-gray-300">
            <tr>
              <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                Car Name
              </th>
              <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                Car Type
              </th>
              <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                Per km rate
              </th>
              <th className="text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-16">
                Actions
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-white">
              {cabs.map((cab) => (
                <Cab deleteCab={deleteCab} cab={cab} key={cab.cabId}></Cab>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ListCab;
