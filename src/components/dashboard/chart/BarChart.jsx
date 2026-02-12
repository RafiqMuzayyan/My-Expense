"use client"
import React from 'react'
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis,
} from 'recharts'
import Wrapper from './Wrapper'
import CustomTooltip from './CustomTooltip'

const BarrChart = ({ 
  data,
  height = 300,
  title = "Last 30 Days Transaction",
  subtitle = "Daily Income & Expense Analysis"
}) => {

  const size = data && data.length > 0 ? {width: `${data.length * 35}px`} : {width: '100%'}

  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-2xl text-black/70 tracking-tight mb-1">
                {title}
              </h3>
              <p className="text-sm text-black/90 ">{subtitle}</p>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 bg-background border border-black/50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-succes shadow-sm" />
                <span className="text-xs text-black/70 font-semibold">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-danger shadow-sm" />
                <span className="text-xs text-black/70 font-semibold">Expense</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="max-w-full bg-background border border-grey rounded-xl px-4 py-4 overflow-x-scroll ">

          <Wrapper size={size}>
            <ResponsiveContainer width="100%" height={height}>
              <BarChart
                data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
                barCategoryGap="4"
              >
                <CartesianGrid 
                  strokeDasharray="1 1" 
                  stroke="rgba(0, 0, 0, 0.1)" 
                
                />
                <XAxis
                  dataKey="name"
                  
                  
                  tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 600 }}
                  dy={12}
                />
                
                <Tooltip 
                  content={<CustomTooltip />} 
                  cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} 
                />
                <Bar
                  dataKey="income"
                  stackId={"ni"}
                  fill="#00c951"                 
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  stackId={"ni"}
                  dataKey="expense"
                  fill="#fb2c36"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
              
            </ResponsiveContainer>
          </Wrapper>

        </div>

        {/* Footer info */}
        <div className="mt-6 flex items-center justify-between text-xs text-black/50">
          <span>Currency: Indonesian Rupiah (IDR)</span>
          <span>Last updated: {new Date().toLocaleDateString('id-ID')}</span>
        </div>
      </div>
    </div>
  )
}

export default BarrChart