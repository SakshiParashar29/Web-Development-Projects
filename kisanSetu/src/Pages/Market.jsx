import React, { useState } from 'react';
import useTheme from '../Components/Darkmode';

const Market = () => {
  const { themeMode } = useTheme();

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedState, setState] = useState("");

  const handleChange = (event) => setSelectedOption(event.target.value);
  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleStateChange = (event) => setState(event.target.value);

  const refreshChanges = () => {
    setSelectedOption("");
    setSelectedDate("");
    setState("");
  };

  return (
    <div className={`min-h-screen px-4 py-6 ${themeMode === 'dark' ? "bg-gray-900 text-white" : "bg-gradient-to-br from-green-50 via-white to-green-100 text-black"}`}>
      {/* Header */}
      <div className={`flex flex-col justify-between px-12 py-10 rounded-xl ${themeMode === 'dark' ? "bg-gray-800" : "bg-green-200"} border-none`}>
        <h2 className='text-2xl font-bold text-left mb-3'>Market Price</h2>
        <p>
          Access to market prices helps farmers make informed decisions about selling their produce,
          ensuring fair earnings and reducing dependence on middlemen. It also allows them to plan crops
          based on demand, leading to better profits and improved livelihoods.
        </p>
      </div>

      {/* Filters */}
      <div className='m-12 flex flex-wrap justify-around gap-4'>
        <div className={`p-4 rounded-md ${themeMode === 'dark' ? "bg-gray-700" : "bg-gray-300"}`}>
          <select id="dropdown" value={selectedOption} onChange={handleChange} className={`${themeMode === 'dark' ? 'bg-gray-700 text-white' : 'bg-transparent'}`}>
            <option value="">Select Commodity</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="pulses">Pulses</option>
            <option value="vegetables">Vegetables</option>
            <option value="meat">Meat</option>
          </select>
        </div>
        <div className={`p-4 rounded-md ${themeMode === 'dark' ? "bg-gray-700" : "bg-gray-300"}`}>
          <select id="state" value={selectedState} onChange={handleStateChange} className={`${themeMode === 'dark' ? 'bg-gray-700 text-white' : 'bg-transparent'}`}>
            <option value="">Select State</option>
            {/* [State options remain unchanged] */}
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className={`p-4 rounded-md ${themeMode === 'dark' ? "bg-gray-700" : "bg-gray-300"}`}>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className='bg-transparent'
          />
        </div>
      </div>

      {/* Buttons */}
      <div className='flex justify-center gap-14 mt-6'>
        <button className='px-12 py-4 bg-green-700 text-white rounded-full hover:bg-green-800'>Search Rate</button>
        <button className='px-12 py-4 bg-green-700 text-white rounded-full hover:bg-green-800' onClick={refreshChanges}>Refresh</button>
      </div>
    </div>
  );
}

export default Market; 
