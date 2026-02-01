import toRupiah from '@/app/utilities/toRupiah'
import { TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const AmountColumn = ({ income = false, amount }) => {
  if (income) {
    return (
      <div className="flex items-center w-fit bg-succes/10 p-1 text-succes font-semibold rounded gap-1">
        + {toRupiah(amount)} <TrendingUp size={16} />
      </div>
    )
  }

  return (
    <div className="flex items-center w-fit bg-danger/10 p-1 text-danger font-semibold rounded gap-1">
      - {toRupiah(amount)} <TrendingDown size={16} />
    </div>
  )
}

export default AmountColumn
