import React from 'react'
import { NavLink } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi"; 

const TransactionsSection = () => {

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
    <NavLink to="/transactions" className="text-blue-600 text-sm flex items-center">
        See All <BiArrowToRight className="ml-1" />
        </NavLink>

  return (
    
         <div className="mt-6 p-4 bg-white ">
            <div className='flex justify-between items-center'>
        <h2 className="text-lg font-bold text-blue-600  ">Transactions</h2>
        <NavLink to="/transactions" className="text-blue-600 text-sm flex items-center ">
        See All <BiArrowToRight className="ml-1" />
        </NavLink>
        </div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white  rounded-md p-2 flex justify-between items-center border-2 mb-4 mt-4  border-gray-300 sm:p-6  "
          >
            {/* Transaction Details */}
            <div>
              <h3 className="font-bold text-lg">{transaction.title}</h3>
              <p className="text-sm text-black">{transaction.card}</p>
              
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
             
            </div>
          </div>
        ))}
      </div>
    
  )
}

export default TransactionsSection