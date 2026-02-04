import AmountColumn from '@/components/dashboard/AmountColumn'
import BarrChart from '@/components/dashboard/BarChart'
import ModalForm from '@/components/dashboard/ModalForm'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Plus, PlusCircle, Search, SquarePen, Trash2 } from 'lucide-react'
import React from 'react'

const page = () => {
  const data = [
    { name: '01', value: 120000 },
    { name: '02', value: 95000 },
    { name: '03', value: 180000 },
    { name: '04', value: 75000 },
    { name: '05', value: 210000 },
    { name: '06', value: 90000 },
    { name: '07', value: 160000 },
    { name: '08', value: 130000 },
    { name: '09', value: 175000 },
    { name: '10', value: 100000 },

    { name: '11', value: 220000 },
    { name: '12', value: 140000 },
    { name: '13', value: 190000 },
    { name: '14', value: 110000 },
    { name: '15', value: 250000 },
    { name: '16', value: 90000 },
    { name: '17', value: 170000 },
    { name: '18', value: 200000 },
    { name: '19', value: 125000 },
    { name: '20', value: 180000 },

    { name: '21', value: 160000 },
    { name: '22', value: 140000 },
    { name: '23', value: 210000 },
    { name: '24', value: 95000 },
    { name: '25', value: 230000 },
    { name: '26', value: 120000 },
    { name: '27', value: 185000 },
    { name: '28', value: 170000 },
    { name: '29', value: 260000 },
    { name: '30', value: 200000 },
  ]


  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8'>
      <ModalForm/>
      <div className='mb-4'>

        {/* header */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className=' font-semibold text-2xl text-black/50'>Your Transaction</h1>
          <button className='flex items-center px-3 py-1 bg-white shadow rounded-xl gap-3 text-sm  ml-8 cursor-pointer'>
            <Plus size={18}/> 
            <span>Add Transaction</span>
          </button>
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
              <option value="">Recent</option>
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
