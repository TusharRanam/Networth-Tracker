import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BsGraphUp } from "react-icons/bs";
import AssetsSection from "../components/AssetsSection";
import TransactionsSection from "../components/TransactionsSection";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Graph data and configuration
  const graphData = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Networth",
        data: [15000000, 1000000, 25000000, 18000000, 20000000, 25000000],
        borderColor: "rgba(59, 130, 246, 1)", // Blue line
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Light blue fill
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 3, // Dots on the graph
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend for simplicity
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
          color: "#666",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount (₹)",
          color: "#666",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        beginAtZero: true, // Ensure the Y-axis starts at 0
      },
    },
  };

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between bg-white p-4 rounded-b-3xl shadow">
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
          VS
        </div>
        <div>
          <h1 className="text-lg font-semibold">Networth</h1>
        </div>
        <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full">
          <img
            src="https://via.placeholder.com/24"
            alt="profile"
            className="w-6 h-6"
          />
        </div>
      </header>

      <div className="bg-gray-100 min-h-screen mb-24 p-4">
        {/* Networth Section */}
        <section className="bg-white mt-4 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Hello Jash,</h2>
          <p className="text-gray-600">
            Your current <span className="text-blue-600 font-bold">Networth</span> is
          </p>
          <h3 className="text-3xl font-bold text-blue-600">₹ 1,23,55,059</h3>
          <p className="text-sm text-gray-500">Your networth is updated every 24 hours</p>
        </section>

        {/* Graph Section */}
        <section className="bg-white mt-4 p-1 rounded-lg shadow sm:p-6">
          <div className="h-60 mt-4">
            <Line data={graphData} options={graphOptions} />
          </div>
        </section>

        {/* Assets Section */}
        <AssetsSection />

        {/* Recent Transactions */}
        <TransactionsSection />
      </div>
    </>
  );
};

export default Dashboard;
