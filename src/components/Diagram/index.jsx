import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

    function Diagram (sum) {
        const data = 
            [
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
          ];
          
          const COLORS = [
                'rgb(37 99 235)', 
                'rgb(94 234 212)', 
                'rgb(250 204 21)', 
                'rgb(217 119 6)', 
                'rgb(244 114 182)',
                'rgb(56 189 248)', 
                'rgb(99 102 241)'
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
            // <ResponsiveContainer width="100%" height="100%">
              <div className='flex justify-center gap-32'>
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
                        <p className='bg-blue-600 py-px px-3 my-2 rounded'>Еда</p>
                        <p className='bg-teal-300 py-px px-3 my-2 rounded'>Коммунальные платежи</p>
                        <p className='bg-yellow-400 py-px px-3 my-2 rounded'>Образование</p>
                        <p className='bg-amber-600 py-px px-3 my-2 rounded'>Транспорт</p>
                        <p className='bg-pink-400 py-px px-3 my-2 rounded'>Развлечение</p>
                        <p className='bg-sky-400 py-px px-3 my-2 rounded'>Лекарствае</p>
                        <p className='bg-indigo-500 py-px px-3 my-2 rounded'>Прочее</p>
                    </div>
              </div>
            // </ResponsiveContainer>
        );
    }

  export default Diagram