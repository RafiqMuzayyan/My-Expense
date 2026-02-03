"use client"
import React from 'react'
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const BarrChart = ({data}) => {
    return (
        <div className="flex flex-col text-sm font-semibold gap-2 bg-white rounded-xl p-4 w-full h-[70%] shadow">
            <h3 className="font-semibold text-lg ">
                Last 30 Days Income
            </h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={data}
                barCategoryGap={4}
                >
                <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip/>    
                <Bar
                    dataKey="value"
                    radius={[5, 5, 0, 0]}
                >
                    {data.map((_, index) => (
                    <Cell
                        key={index}
                        fill={index % 2 === 0 ? '#3b6bd4' : '#162456'}
                    />
                    ))}
                </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarrChart
