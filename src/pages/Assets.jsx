import React from 'react'
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import ChartDataLabels from "chartjs-plugin-datalabels";
import { NavLink } from 'react-router-dom';

const Assets = () => {

  const assetData = [
    {
      category: "Banks",
      totalAmount: "₹10,500",
      items: [
        {
          id: 1,
          name: "HDFC Bank",
          icon: "https://via.placeholder.com/50?text=HDFC",
          account: "01234562087",
          amount: "₹5.2 K",
        },
        {
          id: 2,
          name: "Bank Of Baroda",
          icon: "https://via.placeholder.com/50?text=BOB",
          account: "01234562087",
          amount: "₹5.2 K",
        },
      ],
    },
    {
      category: "Investments",
      totalAmount: "₹10,500",
      items: [
        {
          id: 1,
          name: "Muthoot Finance",
          icon: "https://via.placeholder.com/50?text=Muthoot",
          account: "01234562087",
          amount: "₹5.2 K",
        },
        {
          id: 2,
          name: "Muthoot Finance",
          icon: "https://via.placeholder.com/50?text=Muthoot",
          account: "01234562087",
          amount: "₹5.2 K",
        },
      ],
    },
    {
      category: "Insurance",
      totalAmount: "₹10,500",
      items: [
        {
          id: 1,
          name: "TATA AIG Insurance",
          icon: "https://via.placeholder.com/50?text=TATA",
          account: "01234562087",
          amount: "₹5.2 K",
        },
      ],
    },
  ];

  const data = {
    datasets: [
      {
        data: [12, 5, 3, 5, 4, 5],
        backgroundColor: [
          'green',
          'blue',
          'purple',
          'pink',
          'orange',
          'yellow',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    plugins: {
      datalabels: {
        display: false, // Turn off data labels
      },
    },
  };
  
  

  return (
    <>
      <div>
        {/* Header */}
        
        <div>
  <header className="relative flex items-center bg-white p-4 rounded-b-3xl shadow">
    {/* Back Icon Button */}
    <NavLink to="/dashboard" className="text-gray-600">
      <ChevronLeftIcon className="h-6 w-6" />
    </NavLink>

    {/* Centered Title */}
    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold">
      Assets
    </h1>
  </header>
</div>

        <div className="min-h-screen mb-16 bg-gray-100 p-3 font-sans sm:p-6">


          {/* Date Selector */}
          <div className="mt-4">
            <select className="w-full p-3 border rounded-md bg-white">
              <option>Last 30 days</option>
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
                  <Doughnut data={data} options={options}/>
                </div>
              </div>
            </div>

            {/* Legend Section */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span> Banks
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full inline-block mr-2"></span> Investments
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-pink-500 rounded-full inline-block mr-2"></span> Insurance
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block mr-2"></span> Loans
              </span>
            </div>
          </div>



          {/* Asset Categories */}
          {assetData.map((asset) => (
            <div key={asset.category} className="mt-6 p-4 bg-white">
              {/* Category Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-blue-600 mb-4">{asset.category}</h2>
                <span className="text-xl font-bold text-blue-600 mb-4">{asset.totalAmount}</span>
              </div>

              {/* Asset Items */}
              <div className="mt-4 space-y-4 bg-white">
                {asset.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white  rounded-md p-2 flex justify-between items-center border-2 mb-4  border-gray-200 sm:p-6 "
                  >
                    {/* Icon and Details */}
                    <div className="flex items-center">
                      <img
                        src={item.icon}
                        alt={`${item.name} Icon`}
                        className="w-12 h-12 rounded-md mr-3"
                      />
                      <div>
                        <h3 className="font-normal  text-base">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.account}</p>
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">{item.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Assets