import React from 'react'
import DonutChart from '../chart/DonutChart';
import toRupiah from '@/app/utilities/toRupiah';

const  ExpenseBreakdownCard
 = () => {
    const data = [
        { name: "Food", value: 2000000, color: "#fb2c36" },
        { name: "Transport", value: 3100000, color: "#f59e0b" },
        { name: "Bills", value: 900000, color: "#3b6bd4" },
        { name: "Entertainment", value: 800000, color: "#8b5cf6" },
        { name: "Shopping", value: 600000, color: "#00c951" },
    ];
    function getTotalValue(data = []) {
        return data.reduce((total, item) => total + (item.value || 0), 0)
    }
    function getTopCategoryInsight(data = []) {
        if (!data.length) return null

        const total = data.reduce((sum, item) => sum + (item.value || 0), 0)
        const top = data.reduce((max, item) =>
            item.value > max.value ? item : max
        )

        const percentage = total
            ? Math.round((top.value / total) * 100)
            : 0

        return {
            name: top.name,
            value: top.value,
            percentage,
        }
    }
    const topCategory = getTopCategoryInsight(data)



    return (
        <div className='bg-white rounded-xl p-4 shadow  w-[45%]'>
            <div className='mb-8'>
                <h1 className='text-xl text-black/70 font-semibold'>
                    Expense Breakdown
                </h1>
            </div>
            <div className='flex justify-between items-center gap-3 mb-4'>
                <DonutChart data={data} centerData={getTotalValue(data)}/>
                <div className='flex flex-col w-fit gap-2'>
                    {data.map((item) => (
                        <div className='flex gap-3 items-center justify-between' key={item.name}>
                            <div className='flex justify-start items-center gap-2'> 
                                <div className={`w-3 h-2 rounded-full`} style={{ backgroundColor: item.color }}/>
                                <h3 className='text-black/70 text-sm font-semibold'>{item.name}</h3>
                            </div>
                            <span className='text-black/90 text-sm font-semibold'>{toRupiah(item.value)}</span>
                        </div>
                    ))}
                   
                </div>
            </div>
            <div>
                {topCategory && (
                    <p className="text-sm font-semibold text-center">
                        “{topCategory.name} is the largest expense category this month ({topCategory.percentage}%)”
                    </p>
                )}
            </div>
        </div>
    )
}

export default  ExpenseBreakdownCard

