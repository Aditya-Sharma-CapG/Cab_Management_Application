import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TripBookingService from '../services/TripBookingService';
import Navbar from './Navbar';


const TripBooking = () => {
    const [loading,setLoading] = useState(true);
    const [bookings,setTripBooking] =useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await TripBookingService.getTripBooking();
                setTripBooking(response.data);
            }
            catch(error)
            {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    const deleteTripBooking = (e ,tripBookingId) => {
        e.preventDefault();
        TripBookingService.deleteTripBookingById(tripBookingId).then((res) => {
            if(bookings){
                setTripBooking((prevElement) =>
                {
                    return prevElement.filter((booking) => booking.tripBookingId!== tripBookingId);
                });
            }
        })
    };
    const navigate = useNavigate();
    const editTripBooking = (e,tripBookingId) =>{
      e.preventDefault();
      navigate('/editTripBooking/${tripBookingId}');
    }

  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button 
            onClick={() => navigate('/addBooking') }
            className='rounded bg-slate-600 text-white px-6 py-2 font semibold'>
                Add Booking
            </button>
        </div>
        <div className='flex shadow-border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50 '>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-3 py-6'>
                            From Location
                        </th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-3 py-6'>To Location</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-3 py-6'>From Date</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-3 py-6'>To Date</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-3 py-6'>Distance In Km </th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wider px-3 py-6'>Actions </th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                    { bookings.map((booking) =>
                    (
                    
                      <tr>
                        {/* <td className='text-left px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-500'>{booking.tripBookingId}</div>
                        </td> */}
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-500'>{booking.fromLocation}</div>
                        </td>
                        
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-500'>{booking.toLocation}</div>
                        </td>
                        
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-500'>{booking.fromDateTime}</div>
                        </td>
                        
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-500'>{booking.toDateTime}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-500'>{booking.distanceInKm}</div>
                        </td>
                        
                         <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                         <a
                            onClick={(e,tripBookingId) => editTripBooking(e,booking.tripBookingId)}
                            className='text-indigo-600 hover: text-indigo-800 px-4 hover:cursor-pointer'>
                            Edit
                          </a>
                          <a
                             onClick={(e,tripBookingId) => deleteTripBooking(e, booking.tripBookingId)}
                            className='text-indigo-600 hover: text-indigo-800 hover:cursor-pointer px-4'>
                            Delete
                          </a>
                          
                        </td>
  
                      </tr>
                    ))};
                </tbody>
                )}
            </table>
        </div>
    </div>
    </>
  );
}

export default TripBooking
