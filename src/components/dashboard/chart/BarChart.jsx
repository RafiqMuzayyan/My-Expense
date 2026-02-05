"use client"
import React from 'react'
import toRupiah from '@/app/utilities/toRupiah'
import { 
  Bar, 
  BarChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  CartesianGrid 
} from 'recharts'

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null

  const income = payload.find((p) => p.dataKey === 'income')?.value || 0
  const expense = payload.find((p) => p.dataKey === 'expense')?.value || 0
  const net = income - expense

  return (
    <div className="bg-white border border-grey rounded-lg shadow-xl p-4">
      <p className="font-semibold text-black/70 mb-3 text-sm tracking-wide uppercase opacity-70">
        {label}
      </p>
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-succes" />
            <span className="text-black/70 text-sm font-medium">Income</span>
          </span>
          <span className="font-bold text-succes text-sm tabular-nums">
            {toRupiah(income)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-danger" />
            <span className="text-black/70 text-sm font-medium">Expense</span>
          </span>
          <span className="font-bold text-danger text-sm tabular-nums">
            {toRupiah(expense)}
          </span>
        </div>
        <div className="border-t border-black/50 pt-2.5 mt-2.5">
          <div className="flex items-center justify-between gap-6">
            <span className="text-black/70 text-sm font-medium">Net Flow</span>
            <span className={`font-bold text-sm tabular-nums ${net >= 0 ? 'text-succes' : 'text-danger'}`}>
              {toRupiah(net)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const BarrChart = ({ 
  data,
  height = 300,
  title = "Last 30 Days Transaction",
  subtitle = "Daily Income & Expense Analysis"
}) => {

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
        <div className="bg-background border border-grey rounded-xl p-6">
          <ResponsiveContainer width="100%" height={height}>
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="rgba(0, 0, 0, 0.4)" 
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 600 }}
                dy={12}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 600 }}
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                dx={-8}
              />
              <Tooltip 
                content={<CustomTooltip />} 
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} 
              />
              <Bar
                dataKey="income"
                fill="#00c951"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="expense"
                fill="#fb2c36"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
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