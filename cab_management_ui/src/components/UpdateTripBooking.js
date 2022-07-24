import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TripBookingService from '../services/TripBookingService';
import Navbar from './Navbar';

const UpdateTripBooking = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [tripbooking,setTripBooking] =useState
    ({
        tripBookingId: id,
        fromLocation:"",
        toLocation:"",
        toDateTime:"",
        fromDateTime:"",
        distanceInKm:""
  });
  
  const handleChange = (e) => {
    const value = e.target.value;
    setTripBooking({...tripbooking,[e.target.name]: value});
    
    };


    useEffect(() => {
        const fetchData = async () =>
        {
            try{
            const response = await TripBookingService.getTripBookingById(id);
            setTripBooking(response.fetchData);
            }
            catch(error){
                console.log(error);
            }
        };
        fetchData();
    },[]);

    const updateTripBooking = (e) => {
        e.preventDefault();
        console.log(tripbooking);
        TripBookingService.updateTripBooking(tripbooking,id)
          .then((response) => {
            navigate("/tripBookingList");
          })
          .catch((error) => {
            console.log(error);
          })
      };
    
  return (
     
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1> Update Booking</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal"> From Location</label>
            <input 
            type="text"
            name='fromLocation'
            value={tripbooking.fromLocation}
            onChange = {(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal"> To Location</label>
            <input 
            type="text"
            name='toLocation'
            value={tripbooking.toLocation}
            onChange = {(e) => handleChange(e)}

            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block
             text-gray-600 text-sm font-normal"> From Date</label>
            <input 
            type="date"
            name='fromDateTime'
            value={tripbooking.fromDateTime}
            onChange = {(e) => handleChange(e)}

            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal"> To Date</label>
            <input 
            type="date" 
            name='toDateTime'
            value={tripbooking.toDateTime}
            onChange = {(e) => handleChange(e)}

            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal"> Distance In Km</label>
            <input 
            type="text"
            name='distanceInKm'
            value={tripbooking.distanceInKm} 
            onChange = {(e) => handleChange(e)}

            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button 
            onClick={updateTripBooking}
            className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
            Update
            </button>
            <button 
            //onClick={reset} 
            className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
            Cancel
            </button>
        </div>
      </div>    
    </div>
  )
}

export default UpdateTripBooking