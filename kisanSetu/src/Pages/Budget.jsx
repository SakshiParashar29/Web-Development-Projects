import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useTheme from '../Components/Darkmode';

ChartJS.register(ArcElement, Tooltip, Legend);

const Budget = () => {
  const { themeMode } = useTheme();

  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');

  const showdefault = income === '' && expense === '';

  const data = {
    labels: ['Income', 'Expenses', 'Savings'],
    datasets: [
      {
        data: showdefault ? [100] : [income, expense, income - expense],
        backgroundColor: showdefault
          ? ['#D3D3D3', '#D3D3D3', '#D3D3D3']
          : ['#4CAF50', '#FF5722', '#2196F3'],
        borderColor: '#fff',
        hoverOffset: 20,
      },
    ],
  };

  return (
    <div className={`min-h-screen ${themeMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-50 via-white to-green-100 text-black'}`}>
      
      {/* Header Section */}
      <div className={`flex flex-col px-12 py-10 ${themeMode === 'dark' ? 'bg-gray-800' : 'bg-green-200'}`}>
        <h2 className='text-2xl font-bold'>🌾 Budget Planner</h2>
        <h2 className='font-bold mb-3'>Track your savings. Plan your future.</h2>
        <p>
          Budget planning is essential for farmers to manage their income and expenses effectively.
          It helps track savings, reduce unnecessary costs, and prepare for seasonal uncertainties.
          With proper planning, farmers can become financially stable, making it easier to take loans,
          invest in machinery, or buy quality seeds and fertilizers. A well-managed budget leads to
          smarter decisions, better yields, and long-term growth for the farm and the family.
        </p>
      </div>

      {/* Pie Chart + Inputs Section */}
      <div className='flex flex-col lg:flex-row justify-around items-center mt-10 px-12 gap-8'>
        
        {/* Pie Chart */}
        <div className='w-full lg:w-1/2'>
          <Pie data={data} />
        </div>

        {/* Input Fields */}
        <div className={`w-full lg:w-1/2 flex flex-col gap-4 p-6 rounded shadow ${themeMode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <label>
            Total Income (₹):
            <input
              type='number'
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className={`border p-2 w-full rounded ${themeMode === 'dark' ? 'bg-gray-700 text-white' : ''}`}
            />
          </label>
          <label>
            Total Expenses (₹):
            <input
              type='number'
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              className={`border p-2 w-full rounded ${themeMode === 'dark' ? 'bg-gray-700 text-white' : ''}`}
            />
          </label>
        </div>
      </div>

      {/* Savings Investment Guide */}
      <div className={`mt-16 px-12 py-8 ${themeMode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-6 text-left ${themeMode === 'dark' ? 'text-green-300' : 'text-green-800'}`}>
          How to Utilize Your Savings Wisely
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-4 rounded shadow ${themeMode === 'dark' ? 'bg-green-900' : 'bg-green-50'}`}>
            <h3 className="text-lg font-semibold mb-2">🌾 Invest in Next Harvest</h3>
            <p>Use your savings to buy quality seeds, tools, or fertilizers for a better crop yield.</p>
          </div>
          <div className={`p-4 rounded shadow ${themeMode === 'dark' ? 'bg-yellow-900' : 'bg-yellow-50'}`}>
            <h3 className="text-lg font-semibold mb-2">🐓 Start a Side Income</h3>
            <p>Try poultry, goat farming, or renting equipment. It adds income and reduces risk.</p>
          </div>
          <div className={`p-4 rounded shadow ${themeMode === 'dark' ? 'bg-blue-900' : 'bg-blue-50'}`}>
            <h3 className="text-lg font-semibold mb-2">🏦 Save for the Future</h3>
            <p>Deposit in post office or bank saving schemes to build emergency funds and plan for family needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
