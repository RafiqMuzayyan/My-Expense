"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  House,
  Power,
  Settings,
  WalletMinimal,
} from "lucide-react"
import NavigationItem from "./NavigationItem"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Open button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          absolute left-0
          top-5 lg:top-2.5
          bg-white shadow rounded-e-xl
          w-6 cursor-pointer
          transition-opacity duration-200 z-50
          ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <ChevronRight />
      </button>

      {/* Sidebar */}
      <motion.aside
        animate={{
          width: isOpen ? 200 : 0,
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : -20,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={`
          min-w-[ 200px ]
          bg-foreground
          flex flex-col justify-between
          h-full rounded-xl
          overflow-hidden z-40
          ${isOpen ? "me-8 pt-10 pb-6 px-5" : "me-0 pt-0 pb-0 px-0"}
          fixed  lg:relative
          shadow lg:shadow-none
        `}
      >
        {/* Header */}
        <div className="relative">
          <h1 className="font-bold font-space text-xl">
            My Expense
          </h1>

          <div className="absolute top-1 -right-9 rotate-45 bg-background rounded-bl-xl w-7 h-7 shadow-background shadow" />

          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute top-1.5 -right-7.5
              text-foreground cursor-pointer
              transition-transform duration-150
              hover:scale-110 hover:-translate-x-0.5
              hover:text-dark-foreground
            "
          >
            <ChevronLeft />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-6">
          <NavigationItem url="/dashboard" name="Dashboard" Icon={House} />
          <NavigationItem
            url="/dashboard/transaction"
            name="Transaction"
            Icon={WalletMinimal}
          />
          <NavigationItem url="/dashboard/report" name="Report" Icon={FileText} />
          <NavigationItem url="/dashboard/settings" name="Settings" Icon={Settings} />
        </div>

        {/* Footer */}
        <div>
          <h1 className="font-semibold text-dark-secondary text-xl mb-4">
            John Mark
          </h1>
          <button className="text-secondary/80 cursor-pointer hover:text-dark-secondary transition">
            <Power size={20} />
          </button>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar
