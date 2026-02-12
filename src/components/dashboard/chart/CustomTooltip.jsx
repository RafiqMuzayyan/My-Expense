import toRupiah from '@/app/utilities/toRupiah'
import React from 'react'

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length || !label) return null

    const income = payload.find((p) => p.dataKey === 'income')?.value || 0
    const expense = payload.find((p) => p.dataKey === 'expense')?.value || 0
    const net = income - expense

    return (
        <div className="bg-white border border-grey rounded-lg shadow-xl p-4">
        <p className="font-semibold text-black/70 mb-3 text-sm tracking-wide uppercase opacity-70">{label}</p>
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
            <div className="border-t border-gray-200 pt-2.5 mt-2.5">
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

export default CustomTooltip
