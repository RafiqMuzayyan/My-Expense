"use client"
import React, { useEffect } from 'react'
import { DataCard, TransactionCard } from '@/components/dashboard/Card'
import SelectInput from '@/components/FormItem/SelectInput'
import { ArrowLeftRight, BanknoteArrowDown, Percent,   TrendingDown, TrendingUp, WalletCards, WalletMinimal } from 'lucide-react'
import LineCharts from '@/components/dashboard/chart/LinesChart'
import Table from '@/components/dashboard/table/Table'
import { useApi } from '@/libs/Hooks/useApi'


const DashboardData = ({}) => {
     const { request, data, loading, error } = useApi();

     useEffect(() => {     
        request({ 
            url: "/api/dashboard",
            option: {
                credentials: "include"
            } 
        });
    }, [request]);

    if (loading || !data) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <>
            {/* cards */}
            <div className='grid gap-2 mt-6 grid-cols-2 md:grid-cols-4 '>
                <TransactionCard
                title="Total Transactions"
                total={data.summary.totalTransactions}
                blueBackground={true}
                link={true}
                Icon={ArrowLeftRight}
                />
                <TransactionCard
                title="Total Income"
                total={data.summary.incomeCount}
                Icon={TrendingUp}
                />
                <TransactionCard
                title="Total Expense"
                total={data.summary.expenseCount}
                Icon={TrendingDown}
                />
                <TransactionCard
                title="Monthly Comparison"
                total={data.summary.comparison.balanceChangePercent}
                Icon={Percent}
                />
            </div>

            {/* chart & data card */}
            <div className='w-full grid grid-cols-1 md:grid-cols-6 gap-4 mt-4'>
                <LineCharts
                height={170}
                data={data.chart}
                />
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 md:col-span-2'>
                    
                <DataCard
                    Icon={WalletCards}
                    Title='This Month Balance'
                    Amount={data.summary.balance}
                    className='sm:col-span-2 md:col-span-1'
                />
                <DataCard
                    Icon={WalletMinimal}
                    IconColor='bg-succes'
                    Title='This Month Income'
                    Amount={data.summary.totalIncome}
                />
                <DataCard
                    Icon={BanknoteArrowDown}
                    IconColor='bg-danger'
                    Title='This Month Expense'
                    Amount={data.summary.totalExpense}
                />
                
                </div>
            </div>

            {/* recent transaction */}
            <div className='flex gap-8   pt-4  '>

                <div className='w-full h-full pb-2 px-1'>

                    <div>
                    <div className='flex justify-between pl-12 items-end mb-4' >
                        <h3 className='text-sm font-semibold text-black/40'>Recent Transactions</h3>
                        <SelectInput
                        data={[
                            { label: "All", value: "" },
                            { label: "Income", value: "income" },
                            { label: "Expense", value: "expense" },
                        ]}
                        name='sort'
                        id='sort'
                        />
                    </div>
                    
                    {/* table */}                            
                    <Table data={data.recentTransactions}/>                                  
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashboardData
