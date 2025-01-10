import React from 'react'
import { FaChartLine, FaMoneyBillWave, FaWallet } from "react-icons/fa";
import { BiArrowToRight } from "react-icons/bi"; 
import { NavLink } from "react-router-dom";
import { RiBankLine } from 'react-icons/ri';

const AssetsSection = () => {
  return (
    <div>
        <section className="bg-white mt-4 p-2 rounded-lg shadow sm:p-6">
        <div className="flex justify-between items-center ">
          <h3 className="text-lg font-bold">Assets</h3>
          <NavLink to="/assets" className="text-blue-600 text-sm flex items-center">
            See All <BiArrowToRight className="ml-1" />
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="border-gray-200 border-2 p-1  rounded  flex items-center sm:justify-center ">
                <div className='mr-2'>
                <RiBankLine size={28} className="text-blue-600 " />
                </div>
            <div>
            <h4 className="font-normal mt-2">Banks</h4>
            <p className="text-blue-600 font-bold">₹ 10.5 K</p></div> 
          </div>
          <div className="border-gray-200 border-2 p-2 rounded  flex items-center sm:justify-center ">
                <div className='mr-2'>
            <FaChartLine size={24} className="text-yellow-500 " />
            </div>
            <div>
            <h4 className="font-normal mt-2">Investments</h4>
            <p className="text-blue-600 font-bold">₹ 10.5 K</p>
            </div>
          </div>

          <div className="border-gray-200 border-2 p-2  rounded text-center flex items-center sm:justify-center">
                <div className='mr-2'>
            <FaChartLine size={24} className="text-yellow-500 " />
            </div>
            <div>
            <h4 className="font-normal mt-2">Investments</h4>
            <p className="text-blue-600 font-bold">₹ 10.5 K</p>
            </div>
          </div>

          <div className="border-gray-200 border-2 p-2 rounded text-center flex items-center sm:justify-center">
                <div className='mr-2'>
            <FaChartLine size={24} className="text-yellow-500 " />
            </div>
            <div>
            <h4 className="font-normal mt-2">Investments</h4>
            <p className="text-blue-600 font-bold">₹ 10.5 K</p>
            </div>
          </div>

          <div className="border-gray-200 border-2 p-2 rounded text-center flex items-center sm:justify-center">
          <div className='mr-2'>
            <FaMoneyBillWave size={24} className="text-red-500" />
          </div>
            <div>
            <h4 className="font-normal mt-2">Loans</h4>
            <p className="text-blue-600 font-bold">Add</p>
            </div>
          </div>
          <div className="border-gray-200 border-2 p-2 rounded text-center flex items-center sm:justify-center">
          <div className='mr-2'>
            <FaWallet size={24} className="text-green-500 " />
            </div>
            <div>
            <h4 className="font-normal mt-2">Personal</h4>
            <p className="text-blue-600 font-bold">₹ 10.5 Cr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AssetsSection