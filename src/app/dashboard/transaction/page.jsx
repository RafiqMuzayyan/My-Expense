import AmountColumn from '@/components/dashboard/AmountColumn'
import BarrChart from '@/components/dashboard/chart/BarChart'
import ModalForm from '@/components/dashboard/ModalForm'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search, SquarePen, Trash2 } from 'lucide-react'
import React from 'react'

const page = () => {
  const data = [
  { name: '01', income: 4500000, expense: 2200000 },
  { name: '02', income: 3800000, expense: 1800000 },
  { name: '03', income: 5200000, expense: 2500000 },
  { name: '04', income: 2800000, expense: 1500000 },
  { name: '05', income: 6100000, expense: 3200000 },
  { name: '06', income: 3500000, expense: 1900000 },
  { name: '07', income: 4800000, expense: 2400000 },
  { name: '08', income: 4200000, expense: 2100000 },
  { name: '09', income: 5500000, expense: 2800000 },
  { name: '10', income: 3200000, expense: 1600000 },
  { name: '11', income: 6500000, expense: 3500000 },
  { name: '12', income: 4300000, expense: 2300000 },
  { name: '13', income: 5800000, expense: 2900000 },
  { name: '14', income: 3600000, expense: 1700000 },
  { name: '15', income: 7200000, expense: 3800000 },
  { name: '16', income: 3400000, expense: 1800000 },
  { name: '17', income: 5100000, expense: 2600000 },
  { name: '18', income: 6000000, expense: 3100000 },
  { name: '19', income: 4100000, expense: 2200000 },
  { name: '20', income: 5400000, expense: 2700000 },
  { name: '21', income: 4900000, expense: 2500000 },
  { name: '22', income: 4400000, expense: 2300000 },
  { name: '23', income: 6300000, expense: 3300000 },
  { name: '24', income: 3700000, expense: 1900000 },
  { name: '25', income: 6800000, expense: 3600000 },
  { name: '26', income: 4000000, expense: 2100000 },
  { name: '27', income: 5600000, expense: 2800000 },
  { name: '28', income: 5000000, expense: 2600000 },
  { name: '29', income: 7500000, expense: 4000000 },
  { name: '30', income: 6200000, expense: 3200000 },
]


  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8'>
      
      <div className='mb-4'>

        {/* header */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className=' font-semibold text-2xl text-black/50'>Your Transaction</h1>
          <ModalForm/>
        </div>

        {/* data filter */}
        <div className='flex justify-between items-end mb-4' >
          <div className='flex gap-3  text-black/70'>
            
            <select 
              name="sort-by" 
              id="sort-by"
              className='py-1.5 px-3 bg-white rounded-2xl text-sm font-semibold shadow'
              defaultValue={"none"}

            >
              <option value="">All</option>
              <option value="">opsi 2</option>
              <option value="">opsi 3</option>
              <option value="">opsi 4</option>
            </select>
            <select 
              name="sort-by" 
              id="sort-by"
              className='py-1.5 px-3 bg-white rounded-2xl text-sm font-semibold shadow'
              defaultValue={"none"}

            >
              <option value="">This Month</option>
              <option value="">opsi 2</option>
              <option value="">opsi 3</option>
              <option value="">opsi 4</option>
            </select>
          </div>
          <div className='flex gap-1 items-center bg-white rounded-2xl px-4 py-1.5 focus-within:ring-2 focus-within:ring-secondary shadow'>
            <input type="text" placeholder='Search' className='text-sm outline-0'/>
            <button className='cursor-pointer text-secondary'>
              <Search size={20}/>
            </button>
          </div>
        </div>

        {/* table */}
        <div className='bg-white rounded-xl p-2 shadow '>
          <table className='w-full text-sm'>
            <thead className='text-black/50'>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-black/50'>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
                <td>
                  <div className='flex items-center gap-1'>
                    <Trash2 className='p-1 bg-danger rounded text-white cursor-pointer'/>
                    <SquarePen className='p-1 bg-yellow rounded text-white cursor-pointer'/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='flex justify-center items-center gap-1 pt-2 text-black/70'>
            <ChevronsLeft className='bg-foreground rounded hover:bg-dark-foreground hover:text-dark-secondary cursor-pointer transition-all'/>
            <ChevronLeft className='bg-foreground rounded hover:bg-dark-foreground hover:text-dark-secondary cursor-pointer transition-all'/>
            <div className='bg-foreground rounded hover:bg-dark-foreground hover:text-dark-secondary cursor-pointer transition-all w-6 text-center font-semibold'>
              1
            </div>
            <ChevronRight className='bg-foreground rounded hover:bg-dark-foreground hover:text-dark-secondary cursor-pointer transition-all'/>
            <ChevronsRight className='bg-foreground rounded hover:bg-dark-foreground hover:text-dark-secondary cursor-pointer transition-all'/>
          </div>
        </div>
      </div>
      <BarrChart data={data}/>
    </div>
  )
}

export default page
