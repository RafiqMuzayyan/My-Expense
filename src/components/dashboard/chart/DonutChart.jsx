"use client"

import toRupiah from "@/utilities/toRupiah"
import { PieChart, Pie , Label, Cell, ResponsiveContainer } from "recharts"

export default function DonutChart({ 
  data,
  centerTitle = "Total",
  centerData = 0,
  width = 175,
  height = 175
}) {
    return (
      <ResponsiveContainer width={width} height={height}>
        <PieChart >
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
              {data.map((item) => (
                <Cell key={item.name} fill={item.color || "#e5e7eb"} />
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
                      className="fill-black/50 text-sm font-medium"
                      >
                      {centerTitle}
                      </tspan>
                      <tspan
                      x="50%"
                      dy="18"
                      className="fill-black  font-semibold"
                      >
                      {toRupiah(centerData)}
                      </tspan>
                  </text>
                  )
              }}
              />
          </Pie>
        </PieChart>
      </ResponsiveContainer>  
    )
}
