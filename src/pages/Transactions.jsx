import React from 'react'
import { ChevronLeftIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {  Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { NavLink } from 'react-router-dom';

const Transactions = () => {

  const data = {
    labels: ["Food", "Transportation", "Tax", "Entertainment", "Shopping"], // Labels for segments
    datasets: [
      {
        data: [40, 20, 10, 15, 15], // Data values for each segment
        backgroundColor: ["#007BFF", "#17A2B8", "#6F42C1", "#FFC107", "#E83E8C"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        display: true, // Always display labels
        color: "#ffffff", // Text color
        formatter: (value, context) => {
          // Access the label text for each segment
          const label = context.chart.data.labels[context.dataIndex];
          // Calculate the percentage
          const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
          const percentage = ((value / total) * 100).toFixed(1); // Format to 1 decimal place
          return `${label}`; // Combine label and percentage
        },
        font: {
          size: 12, // Font size
          weight: "bold", // Font weight
        },
        anchor: "center", // Align label to the center
        align: "justify-center", // Center label within segment
        clamp: true, // Prevent label overflow
      },
    },
    hover: {
      mode: null, // Disable hover effects
    },
  };


  
    const transactions = [
        {
          id: 1,
          title: "Amazon Fresh",
          type: "Shopping",
          amount: "₹10.8 K",
          card: "Visa Card • 0976",
          date: "Mon Dec 01, 2024",
          time: "19:45:10",
          isExpense: true,
        },
        {
          id: 2,
          title: "Dividend",
          type: "Income",
          amount: "₹10.8 K",
          card: "Visa Card • 0976",
          date: "Mon Dec 01, 2024",
          time: "19:45:10",
          isExpense: false,
        },
        {
          id: 3,
          title: "Investment",
          type: "Income",
          amount: "₹10.8 K",
          card: "Visa Card • 0976",
          date: "Mon Dec 01, 2024",
          time: "19:45:10",
          isExpense: false,
        },
        {
          id: 4,
          title: "Netflix",
          type: "Entertainment",
          amount: "₹10.8 K",
          card: "Visa Card • 0976",
          date: "Mon Dec 01, 2024",
          time: "19:45:10",
          isExpense: true,
        },
        {
          id: 5,
          title: "Salary",
          type: "Income",
          amount: "₹10.8 K",
          card: "Visa Card • 0976",
          date: "Mon Dec 01, 2024",
          time: "19:45:10",
          isExpense: false,
        },
      ];
    
      return (
        <>
          {/* Header */}
    <header className="flex items-center justify-between bg-white p-4 rounded-b-3xl shadow">
        
    <NavLink to="/dashboard" className="text-gray-600">
              {/* Back Icon */}
               <ChevronLeftIcon className="h-6 w-6" />
            </NavLink>
        <div>
        <h1 className=" text-lg font-semibold">Transactions</h1>
        </div>
      
        <button className="text-gray-600">
          <ArrowDownTrayIcon className="h-6 w-6" />
        </button>
    </header>
        <div className="min-h-screen mb-16 bg-gray-100 p-3 font-sans sm:p-6">
          
    
          {/* Date Selector */}
          <div className="mt-4">
            <select className="w-full p-2 border rounded-md">
              <option>Last 30 days</option>
              {/* Add more options as needed */}
            </select>
          </div>
    
         {/* Pie Chart and Summary */}
                   <div className="mt-6 bg-white p-6 shadow-md rounded-md">
                     <div className="flex flex-col items-center">
                       {/* Header Section */}
                       <div className="text-sm flex justify-between w-full max-w-md mb-6">
                         <div className="text-center">
                           Expense:
                           <div className="text-red-500 font-bold">₹1.5 Lac</div>
                         </div>
                         <div className="text-center">
                           Income:
                           <div className="text-green-500 font-bold">₹3 Lac</div>
                         </div>
                         <div className="text-center">
                           Total:
                           <div className="text-gray-800 font-bold">₹1.5 Lac</div>
                         </div>
                       </div>
         
                       {/* Centered Doughnut Chart */}
                       <div className="flex justify-center items-center w-full">
                         <div className="w-64 h-64 flex justify-center items-center">
                           <Pie data={data} options={options} />
                         </div>
                       </div>
                     </div>
                   </div>
    
          {/* Transaction List */}
          <div className="mt-6 p-4 bg-white">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Transactions</h2>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white  rounded-md p-2 flex justify-between items-center border-2 mb-4  border-gray-200 sm:p-6  "
          >
            {/* Transaction Details */}
            <div>
              <h3 className="font-bold text-lg">{transaction.title}</h3>
              <p className="text-sm text-black">{transaction.card}</p>
              <select
                className="mt-4 bg-gray-100 text-gray-600 text-sm rounded-md px-2 py-1 border "
                defaultValue={transaction.type}
              >
                <option value="Shopping">Shopping</option>
                <option value="Income">Income</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              
            </div>

            {/* Transaction Amount & Type */}
            <div className="text-right">
              <p
                className={`text-xl font-bold ${
                  transaction.isExpense ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.amount}
              </p>
              <p className=" text-black text-xs sm:text-sm mt-4">{`${transaction.date}`}</p>
              <p className=" text-black text-xs sm:text-sm">{`${transaction.time}`} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
      );
    };
export default Transactions