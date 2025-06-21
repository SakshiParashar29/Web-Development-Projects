import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, Cell } from 'recharts';

const Metric = () => {
    const categories = ['Economic Indicators', "Social Development", "Health & Well-being", "Environment & Sustainability", "Governance & Infrastructure", "Economic Equality"];

    const [category, setSelectedCategory] = useState('');
    const [Data, setData] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        let processed;

        if (url.includes('Equality.json')) {
            processed = data.map((d, i) => {
                const score =
                    (100 - d.povertyRate * 100) * 0.4 +
                    (100 - d.gini) * 0.3 +
                    d.bottom40IncomeShare * 0.3;

                return {
                    country: d.country,
                    value: score.toFixed(2),
                    fill: i < 3 ? '#16a34a' : i < 7 ? '#f59e0b' : '#e11d48'
                };
            });
        } else {
            processed = data.map((d, i) => ({
                ...d,
                fill: i < 3 ? '#16a34a' : i < 7 ? '#f59e0b' : '#e11d48'
            }));
        }
        processed.sort((a, b) => b.value - a.value);
        setData(processed);
    }

    const check = () => {
        if (category === 'Economic Indicators')
            fetchData('/Data/GDP.json');
        else if (category === 'Social Development')
            fetchData('/Data/HDI.json');
        else if (category === "Health & Well-being")
            fetchData('/Data/Health.json');
        else if (category === "Environment & Sustainability")
            fetchData('/Data/EPI.json');
        else if (category === "Governance & Infrastructure")
            fetchData('/Data/Governance.json');
        else if (category === "Economic Equality")
            fetchData('/Data/Equality.json');
    }
    return (
        <div className='mt-8 text-center'>
            <h2 className='text-4xl font-semibold mb-4'>Explore Insights: <span className='text-3xl'>Choose a Metric to Explore Country Rankings.</span></h2>
            <div className='bg-white shadow-lg rounded-2xl p-6 border border-gray-200 w-1/2 mx-auto flex flex-col items-center mb-5'>
                <label className='block text-3xl font-semibold mb-2 text-gray-700 text-center'>Category</label>
                <select className='mb-4 p-3 text-2xl rounded-lg bg-gray-100 text-center w-3/4'
                    value={category} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option>Select a category</option>
                    {
                        categories.map((c, i) => <option key={i} value={c}>{c}</option>)
                    }
                </select>
                <button
                    className='bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold px-12 py-2 rounded-full text-center mx-auto mt-2 block cursor-pointer'
                    onClick={check}
                >
                    Fetch
                </button>
            </div>
            {Data.length > 0 && (
                <div className='w-4/5 mx-auto mt-8'>
                    <h3 className='text-3xl font-bold mb-4'>
                        Top Countries – {category}
                    </h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            layout="vertical"
                            data={Data}
                            margin={{ top: 20, right: 40, left: 80, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="country" type="category" />
                            <Tooltip formatter={(v) => `${v}`} />
                            <Bar dataKey="value">
                                <LabelList dataKey="value" position="right" formatter={(v) => v} />
                                {Data.map((entry, index) => (
                                    <Cell key={index} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    )
}

export default Metric
