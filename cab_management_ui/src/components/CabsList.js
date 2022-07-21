import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CabService from "../services/CabService";
import Cab_s from "./Cab_s";

const CabsList = () => {
  const [loadings, setLoadings] = useState(true);
  const [cabs, setCabs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadings(true);
      try {
        const response = await CabService.getCabs();
        setCabs(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoadings(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12 mt-6 ">
        <h1 className="rounded bg-slate-600 hover:bg-slate-900 text-center text-white px-6 py-2 font-semibold">
          Book a Cab
        </h1>
      </div>

      <div className="flex shadow border-b mt-3">
        <table className="min-w-full">
          <thead className="bg-gray-200">
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
              <th className="text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>

          {!loadings && (
            <tbody className="bg-white">
              {cabs.map((cab) => (
                <Cab_s cab={cab} key={cab.cabId}></Cab_s>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CabsList;
