"use client"
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip'

const LineCharts = ({ 
  data,  
  height = 230,
  title = "Monthly Finance Overview",
  subtitle = "Income & Expense Analysis"
}) =>  {
  const defaultData = [  
    { name: '', income: 0, expense: 0 },
    { name: 'Mon', income: 4500000, expense: 1200000 },
    { name: 'Tue', income: 1800000, expense: 800000 },
    { name: 'Wed', income: 4200000, expense: 9500000 },
    { name: 'Thu', income: 7000000, expense: 4200000 },
    { name: 'Fri', income: 2800000, expense: 800000 },
    { name: 'Sat', income: 3200000, expense: 3555555 },
    { name: 'Sun', income: 7555555, expense: 5222222 },
    { name: '', income: 7555555, expense: 5222222 },
  ]
  const chartData = data || defaultData

  return (
    <div className="bg-white rounded-xl p-4 w-full shadow relative overflow-hidden md:col-span-4">
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-2xl text-black/70 tracking-tight mb-1">
                {title}
              </h3>
              <p className="text-sm text-black/90">{subtitle}</p>
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
        <div className="bg-background border border-grey rounded-xl px-4 py-4">
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart 
              data={chartData} 
              margin={{ top: 10, right: 0, left: 0 , bottom: 10 }}
            >
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00c951" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00c951" stopOpacity={0.05}/>
                </linearGradient>
                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb2c36" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#fb2c36" stopOpacity={0.02}/>
                </linearGradient>
              </defs>
              
            
              
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500 }}
                dy={12}   
                tickFormatter={(value) => value || ''}
              />
                
              <Tooltip content={<CustomTooltip />} cursor={false} />
              
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#fb2c36"
                strokeWidth={2.5}
                fill="url(#expenseGradient)"
                dot={false}
                activeDot={{ 
                  r: 5, 
                  fill: '#fb2c36',
                  strokeWidth: 3,
                  stroke: '#ffffff'
                }}
              />
              
              <Area
                type="monotone"
                dataKey="income"
                stroke="#00c951"
                strokeWidth={2.5}
                fill="url(#incomeGradient)"
                dot={false}
                activeDot={{ 
                  r: 5, 
                  fill: '#00c951',
                  strokeWidth: 3,
                  stroke: '#ffffff'
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Footer info */}
        <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
          <span>Currency: Indonesian Rupiah (IDR)</span>
          <span>Last updated: {new Date().toLocaleDateString('id-ID')}</span>
        </div>
      </div>
    </div>
  )
}

export default LineCharts