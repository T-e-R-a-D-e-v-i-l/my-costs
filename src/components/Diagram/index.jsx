import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function Diagram({ costs }) {

    const getCategoryAmount = (category) => {
        const filtered = costs.filter(cost => {
            if (category === cost.category) {
                return true
            } else {
                return false
            }
        })
        const sum = filtered.reduce((prev, current) => prev + parseInt(current.sumCost), 0)
        return sum
    }

    const data = [
        { name: "Еда", value: getCategoryAmount("Еда") },
        { name: "Коммунальные платежи", value: getCategoryAmount("Коммунальные платежи") },
        { name: "Образование", value: getCategoryAmount("Образование") },
        { name: "Транспорт", value: getCategoryAmount("Транспорт") },
        { name: "Развлечения", value: getCategoryAmount("Развлечения") },
        { name: "Лекарства", value: getCategoryAmount("Лекарства") },
        { name: "Прочее", value: getCategoryAmount("Прочее") },
    ];

    const COLORS = [
        'rgb(96 165 250)',
        'rgb(153 246 228)',
        'rgb(254 240 138)',
        'rgb(252 211 77)',
        'rgb(251 207 232)',
        'rgb(186 230 253)',
        'rgb(165 180 252)'
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }

    return (
        <div className='flex justify-center gap-32 mt-10'>
            <PieChart width={200} height={250}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div>

                <p className='flex gap-2 bg-blue-400 py-px px-3 my-2 rounded'><img src="./images/food_icon.png" alt="" className='w-5 h-5 m-1' />Еда</p>
                <p className='flex gap-2 bg-teal-200 py-px px-3 my-2 rounded'><img src="./images/money_icon.png" alt="" className='w-5 h-5 m-1' />Коммунальные платежи</p>
                <p className='flex gap-2 bg-yellow-200 py-px px-3 my-2 rounded'><img src="./images/education_icon.png" alt="" className='w-5 h-5 m-1' />Образование</p>
                <p className='flex gap-2 bg-amber-300 py-px px-3 my-2 rounded'><img src="./images/transport_icon.png" alt="" className='w-5 h-5 m-1' />Транспорт</p>
                <p className='flex gap-2 bg-pink-200 py-px px-3 my-2 rounded'><img src="./images/carnival_icon.png" alt="" className='w-5 h-5 m-1' />Развлечение</p>
                <p className='flex gap-2 bg-sky-200 py-px px-3 my-2 rounded'><img src="./images/medicines_icon.png" alt="" className='w-5 h-5 m-1' />Лекарствае</p>
                <p className='flex gap-2 bg-indigo-300 py-px px-3 my-2 rounded'><img src="./images/other_icon.png" alt="" className='w-5 h-5 m-1' />Прочее</p>
            </div>
        </div>
    );
}

export default Diagram