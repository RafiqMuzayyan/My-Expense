"use client"

import toRupiah from "@/app/utilities/toRupiah"
import { PieChart, Pie , Label, Cell } from "recharts"


const COLORS = ["#00c951", "#fb2c36", "#3b6bd4"]

export default function DonutChart({ data }) {
  return (
    <PieChart width={175} height={175}>
        <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow
        dx="0"
        dy="0"
        stdDeviation="4"
        floodColor="#000"
        floodOpacity="0.25"
      />
    </filter>
  </defs>
    <Pie
        data={data}
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        paddingAngle={0}
        stroke="none"
        filter="url(#shadow)"
    >
        {data.map((_, i) => (
        <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}

        {/* TEXT TENGAH */}
        <Label
        position="center"
        content={() => {

            return (
            <text x="50%" y="50%" textAnchor="middle">
                <tspan
                x="50%"
                dy="-4"
                className="fill-gray-500 text-xs"
                >
                Total Balance
                </tspan>
                <tspan
                x="50%"
                dy="18"
                className="fill-black  font-semibold"
                >
                {toRupiah(data[2].value)}
                </tspan>
            </text>
            )
        }}
        />
    </Pie>
    </PieChart>
  )
}
