import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {categories} from 'components/CostsForm'

    function Diagram (sum) {
        // const data = [
        //     { name: 'Group A', value: 20 },
        //     { name: 'Group B', value: 300 },
        //     { name: 'Group C', value: 300 },
        //     { name: 'Group D', value: 200 },
        // ];
          
        // return (
        //     <div style={{ width: '100%', height: 300 }}>
        //         <ResponsiveContainer>
        //         <PieChart>
        //         <Pie dataKey="value" data={data} fill="#8884d8" label />
        //         </PieChart>
        //         </ResponsiveContainer>
        //     </div>
        // );
        const data = [
            { name: 'Еда', value: {sum} },
            { name: 'Коммунальные платежи', value: 300 },
            { name: 'Образование', value: 300 },
            { name: 'Транспорт', value: 200 },
            { name: 'Развлечение', value: 200 },
            { name: 'Лекарствае', value: 200 },
            { name: 'Прочее', value: 200 },
          ];
          
          const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF69B4','#00FFFF', '#BC8F8F', '#6A5ACD'];
          
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
        
          
            return (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
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
                </ResponsiveContainer>
            );
            
        }
    }

  export default Diagram