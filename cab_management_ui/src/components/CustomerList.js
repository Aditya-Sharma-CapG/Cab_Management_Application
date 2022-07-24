import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
import Navbar from './Navbar'

const CustomerList = () => {
    const [customers, setCustomers] = useState(null);
   const [loadings, setLoadings] = useState(true);

   useEffect(() => {
    const fetchData = async () => {
      setLoadings(true);
      try {
        const response = await CustomerService.getCustomers();

        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoadings(false);
    }; 
    fetchData();
  }, []);
  const deletecustomer =(e,id)=>{
    e.preventDefault();
    CustomerService.deleteCustomerById(id).then((res)=>{
      if(customers){
        setCustomers((prevElement)=>{
          return prevElement.filter((customer)=>customer.id !== id);
        });
      }
    });
  };
  const navigate= useNavigate();
  const editCustomer=(e, id)=>{
    e.preventDefault();
    navigate(`/editCustomer/${id}`);
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto my-8">
    <div className="flex shadow border-b mt-3">
        <table className="min-w-full">
            <thead className="bg-gray-200">
                   <tr>
                   <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        UserId</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Username</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                         Password</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Village</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        MobileNumer</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Name</th>
                    <th className="text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Actions</th>
                    </tr> 
            </thead>
            {!loadings && (
            <tbody className="bg-white">
              {customers.map((customer)=>(
                <tr
                className=" bg-gray-100 hover:bg-gray-300 hover:delay-75"
                key={customer.id}
              >
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    {customer.id}
                  </div>
                </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    {customer.username}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                    {customer.password}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {customer.village}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {customer.phone}
                     
                  </div></td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {customer.name}
                  </div>
                
                </td>
                        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                          <a
                          onClick={(e, id) => editCustomer(e,customer.id) }
                          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Edit</a>


                          <a 
                          onClick={(e, id) =>deletecustomer(e,customer.id) }
                          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Delete</a>
                        </td>
                      </tr>
            ))}
            </tbody>
            )}
            </table>
            </div>


    </div>
    </>
    
  )
}

export default CustomerList