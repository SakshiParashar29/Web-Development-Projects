// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const Compare = () => {
//   const States = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
//     "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
//     "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
//     "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];

//   const categories = {
//     "Economic Indicators": [
//       "GDP (in Rs. Cr.)",
//       "Growth Rate % (YoY)",
//       "GDP per Capita",
//       "Unemployment Rate",
//       "Inflation Rate",
//       "Foreign Direct Investment",
//       "Export/Import Ratios",
//       "Public Debt as % of GDP"
//     ],
//     "Social Development": [
//       "Human Development Index (HDI)",
//       "Life Expectancy",
//       "Infant Mortality Rate",
//       "Literacy Rate",
//       "Education Index",
//       "Gender Inequality Index",
//       "Population Growth Rate",
//       "Urban Population %"
//     ],
//     "Health & Well-being": [
//       "Healthcare Expenditure per Capita",
//       "Physicians per 1000 people",
//       "Hospital Beds per 1000 people",
//       "Access to Clean Water %",
//       "Vaccination Coverage %"
//     ],
//     "Environment & Sustainability": [
//       "CO2 Emissions per Capita",
//       "Renewable Energy %",
//       "Forest Area %",
//       "Air Quality Index",
//       "Environmental Performance Index"
//     ],
//     "Governance & Infrastructure": [
//       "Corruption Perceptions Index",
//       "Internet Penetration %",
//       "Mobile Phone Subscriptions",
//       "Infrastructure Quality Index",
//       "Political Stability Index"
//     ],
//     "Economic Equality": [
//       "Gini Coefficient (Income Inequality)",
//       "Poverty Rate",
//       "Social Protection Coverage"
//     ]
//   };

//   const [state1, setState1] = useState('');
//   const [state2, setState2] = useState('');
//   const [cities1, setCities1] = useState([]);
//   const [cities2, setCities2] = useState([]);
//   const [city1, setCity1] = useState('');
//   const [city2, setCity2] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubCategory, setSelectedSubCategory] = useState('');
//   const [comparisonData, setComparisonData] = useState([]);

//   const fetchCities = async (state) => {
//     const response = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ country: 'India', state })
//     });
//     const data = await response.json();
//     return data.data;
//   };

//   useEffect(() => {
//     if (state1) {
//       setCity1('');
//       fetchCities(state1).then(setCities1);
//     }
//   }, [state1]);

//   useEffect(() => {
//     if (state2) {
//       setCity2('');
//       fetchCities(state2).then(setCities2);
//     }
//   }, [state2]);

//   const compareData = async (state1, state2, city1, city2) => {

//     const res1 = await fetch(`/Data/${state1}.json`);
//     const data1 = await res1.json();

//     const res2 = await fetch(`/Data/${state2}.json`);
//     const data2 = await res2.json();

//     const filteredData1 = data1.filter(item => item.Description === selectedSubCategory);
//     const filteredData2 = data2.filter(item => item.Description === selectedSubCategory);

//     const finalData = filteredData1.map((item1, i) => {
//       const item2 = filteredData2[i];
//       return {
//         year: item1.Year,
//         [city1]: parseFloat(item1[` ${city1}`] || item1[city1] || 0),
//         [city2]: parseFloat(item2[` ${city2}`] || item2[city2] || 0)
//       };
//     });

//     setComparisonData(finalData);
//   };

//   return (
//     <div className="bg-gray-50 min-h-[70vh] py-10 px-4">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
//         Compare Cities Across Development Categories
//       </h2>
//       <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-10">
//         Select two cities and a category to view side-by-side comparisons of key growth metrics.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-2xl">
//         {/* State and City 1 */}
//         <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
//           <label className="block mb-2 text-lg font-semibold text-gray-700">State 1</label>
//           <select value={state1} onChange={(e) => setState1(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100">
//             <option value="">Select a State</option>
//             {States.map((state, i) => <option key={i} value={state}>{state}</option>)}
//           </select>

//           <label className="block mt-4 mb-2 text-lg font-semibold text-gray-700">City 1</label>
//           <select value={city1} onChange={(e) => setCity1(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100">
//             <option value="">Select a City</option>
//             {cities1.map((city, i) => <option key={i} value={city}>{city}</option>)}
//           </select>
//         </div>

//         {/* State and City 2 */}
//         <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
//           <label className="block mb-2 text-lg font-semibold text-gray-700">State 2</label>
//           <select value={state2} onChange={(e) => setState2(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100">
//             <option value="">Select a State</option>
//             {States.map((state, i) => <option key={i} value={state}>{state}</option>)}
//           </select>

//           <label className="block mt-4 mb-2 text-lg font-semibold text-gray-700">City 2</label>
//           <select value={city2} onChange={(e) => setCity2(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100">
//             <option value="">Select a City</option>
//             {cities2.map((city, i) => <option key={i} value={city}>{city}</option>)}
//           </select>
//         </div>

//         {/* Category and Subcategory */}
//         <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
//           <label className="block mb-2 text-lg font-semibold text-gray-700">Category</label>
//           <select
//             value={selectedCategory}
//             onChange={(e) => {
//               setSelectedCategory(e.target.value);
//               setSelectedSubCategory('');
//             }}
//             className="w-full p-3 rounded-lg bg-gray-100"
//           >
//             <option value="">Select a Category</option>
//             {Object.keys(categories).map((cat, i) => (
//               <option key={i} value={cat}>{cat}</option>
//             ))}
//           </select>

//           <label className="block mt-4 mb-2 text-lg font-semibold text-gray-700">Subcategory</label>
//           <select
//             value={selectedSubCategory}
//             onChange={(e) => setSelectedSubCategory(e.target.value)}
//             disabled={!selectedCategory}
//             className="w-full p-3 rounded-lg bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <option value="">{selectedCategory ? "Select a Subcategory" : "Select a Category First"}</option>
//             {selectedCategory &&
//               categories[selectedCategory].map((sub, i) => (
//                 <option key={i} value={sub}>{sub}</option>
//               ))
//             }
//           </select>
//         </div>
//       </div>

//       <button
//         className='bg-green-600 text-white block mb-2 text-2xl font-semibold px-8 py-2 rounded-2xl text-center mx-auto mt-4 cursor-pointer'
//         onClick={() => compareData(state1, state2, city1, city2)}
//       >
//         Compare
//       </button>
//       {comparisonData.length > 0 && (
//         <div className="mt-12 max-w-6xl mx-auto">
//           <h3 className="text-3xl font-semibold text-center mb-6">Comparison Chart</h3>
//           <ResponsiveContainer width="100%" height={400}>
//             <BarChart data={comparisonData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="year" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey={city1} fill="#8884d8" />
//               <Bar dataKey={city2} fill="#82ca9d" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Compare;


import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Compare = () => {
  const [countries, setCountry] = useState([]);
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [countryCodes, setCountryCodes] = useState({});
  const [result, setResult] = useState(null);


  const categories = {
    "Economic Indicators": [
      { label: "GDP (in USD Trillion)", key: "NY.GDP.MKTP.CD" },
      { label: "GDP per Capita", key: "NY.GDP.PCAP.CD" },
      { label: "Unemployment Rate", key: "SL.UEM.TOTL.ZS" },
      { label: "Inflation Rate", key: "FP.CPI.TOTL.ZG" },
      { label: "Foreign Direct Investment", key: "BX.KLT.DINV.CD.WD" },
      { label: "Export/Import Ratios", key: ["NE.EXP.GNFS.ZS", "NE.IMP.GNFS.ZS"] },
      { label: "Public Debt as % of GDP", key: "GC.DOD.TOTL.GD.ZS" }
    ],
    "Social Development": [
      { label: "Human Development Index (HDI)", key: "UNDP_HDI" },
      { label: "Life Expectancy", key: "SP.DYN.LE00.IN" },
      { label: "Infant Mortality Rate", key: "SP.DYN.IMRT.IN" },
      { label: "Literacy Rate", key: "SE.ADT.LITR.ZS" },
      { label: "Education Index", key: "UNDP_Education_Index" },
      { label: "Gender Inequality Index", key: "UNDP_GII" },
      { label: "Population Growth Rate", key: "SP.POP.GROW" },
      { label: "Urban Population %", key: "SP.URB.TOTL.IN.ZS" }
    ],
    "Health & Well-being": [
      { label: "Healthcare Expenditure per Capita", key: "SH.XPD.CHEX.PC.CD" },
      { label: "Physicians per 1000 people", key: "SH.MED.PHYS.ZS" },
      { label: "Hospital Beds per 1000 people", key: "SH.MED.BEDS.ZS" },
      { label: "Access to Clean Water %", key: "SH.H2O.SAFE.ZS" },
      { label: "Vaccination Coverage %", key: "SH.IMM.MEAS" }
    ],
    "Environment & Sustainability": [
      { label: "CO2 Emissions per Capita", key: "EN.ATM.CO2E.PC" },
      { label: "Renewable Energy %", key: "EG.FEC.RNEW.ZS" },
      { label: "Forest Area %", key: "AG.LND.FRST.ZS" },
      { label: "Air Quality Index", key: "EXTERNAL_AQI" },
      { label: "Environmental Performance Index", key: "YALE_EPI" }
    ],
    "Governance & Infrastructure": [
      { label: "Corruption Perceptions Index", key: "CPI_Transparency" },
      { label: "Internet Penetration %", key: "IT.NET.USER.ZS" },
      { label: "Mobile Phone Subscriptions", key: "IT.CEL.SETS.P2" },
      { label: "Infrastructure Quality Index", key: "INFRASTRUCTURE_WEF" },
      { label: "Political Stability Index", key: "PV.POL.STAB.XQ" }
    ],
    "Economic Equality": [
      { label: "Gini Coefficient (Income Inequality)", key: "SI.POV.GINI" },
      { label: "Poverty Rate", key: "SI.POV.DDAY" },
      { label: "Social Protection Coverage", key: "per_allsp.cov_pop_tot" }
    ]
  };


  const fetchCountry = async () => {
    const response = await fetch('/Data/Countries.json');
    const data = await response.json();
    setCountry(data.map(country => country.name));

    const codes = {};
    data.forEach(c => codes[c.name] = c.code);
    setCountryCodes(codes);
  }

  const fetchIndicator = async (countryCode, indicatorCode) => {
    const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicatorCode}?format=json&date=2020&per_page=1`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json[1] && json[1][0] ? json[1][0].value : 'N/A';
    } catch (err) {
      console.error(err);
      return 'Error';
    }
  };

  const handleCompare = async () => {
    if (!country1 || !country2 || !selectedCategory || !selectedSubCategory) {
      alert("Please select all fields");
      return;
    }

    const sub = categories[selectedCategory].find(s => s.label === selectedSubCategory);
    if (!sub || !sub.key || Array.isArray(sub.key)) {
      alert("This indicator is unsupported or requires multiple API calls");
      return;
    }

    const code1 = countryCodes[country1];
    const code2 = countryCodes[country2];

    const val1 = await fetchIndicator(code1, sub.key);
    const val2 = await fetchIndicator(code2, sub.key);

    setResult({
      label: sub.label,
      country1: { name: country1, value: val1 },
      country2: { name: country2, value: val2 }
    });
  };

  useEffect(() => {
    fetchCountry();
  }, [])
  return (
     <section className="bg-gray-50 min-h-[70vh] py-10 px-4">
    <div className="bg-gray-50 min-h-[70vh] py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
        Compare Countries
      </h2>
      <p className="text-2xl text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Select two countries and a category to compare development indicators.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Country Selection Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Select Countries</h3>

          <label className="block text-xl font-medium mb-2 text-gray-700">Country 1</label>
          <select value={country1} onChange={(e) => setCountry1(e.target.value)} className="w-full mb-4 p-3 text-2xl rounded-lg bg-gray-100">
            <option value="">Select a Country</option>
            {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>

          <label className="block text-xl font-medium mb-2 text-gray-700">Country 2</label>
          <select value={country2} onChange={(e) => setCountry2(e.target.value)} className="w-full p-3 text-2xl rounded-lg bg-gray-100">
            <option value="">Select a Country</option>
            {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Category Selection Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Select Category</h3>

          <label className="block text-2xl font-medium mb-2 text-gray-700">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubCategory('');
            }}
            className="w-full mb-4 p-3 rounded-lg bg-gray-100 text-2xl"
          >
            <option value="">Select a Category</option>
            {Object.keys(categories).map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>

          <label className="block text-xl font-medium mb-2 text-gray-700">Subcategory</label>
          <select
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            disabled={!selectedCategory}
            className="w-full p-3 rounded-lg bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-2xl"
          >
            <option value="">{selectedCategory ? "Select a Subcategory" : "Select a Category First"}</option>
            {selectedCategory &&
              categories[selectedCategory].map((sub, i) => (
                <option key={i} value={sub.label}>{sub.label}</option>
              ))}
          </select>
        </div>
      </div>

      <button
        className='bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold px-8 py-3 rounded-full text-center mx-auto mt-10 block cursor-pointer'
        onClick={handleCompare}
      >
        Compare
      </button>
      {result && (
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">
            {result.label} (2020)
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                {
                  name: result.label,
                  [result.country1.name]: result.country1.value,
                  [result.country2.name]: result.country2.value
                }
              ]}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={result.country1.name} fill="#1D4ED8" />
              <Bar dataKey={result.country2.name} fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
    </section>
  );
};

export default Compare;
