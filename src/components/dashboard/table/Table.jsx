"use client"
import styles from "./Table.module.css"
import React, { useState } from 'react'
import AmountColumn from './AmountColumn'
import Pagination from './Pagination'
import { SquarePen, Trash2, EllipsisVertical } from 'lucide-react'
import {transactions} from "./data"
import ModalEditForm from "../modal/ModalEditForm"
import ModalDelete from "../modal/ModalDelete"
import { formatDisplayDateID } from "@/utilities/formatDisplayDate"

const Table = ({data = transactions}) => {
    const [openDetails, setOpenDetails] = useState({})

    const [EditId, setEditId] = useState(null)
    const [deleteId, setdeleteId] = useState(null)

    const selectedData = data.find(
      (item) => item.id === EditId || item.id === deleteId
    )

    const toggleDetail = (id) => {
        setOpenDetails(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    return (
        <div className={styles.tableContainer + ' rounded-xl shadow'}>
          <table className={styles.table + ' w-full mb-4 '}>
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
            {data.map((data) => (
              <React.Fragment key={data.id}>
                <tr>
                  <td data-title="Transaction">
                    <div className='flex items-center gap-2'>
                      <button 
                        onClick={() => toggleDetail(data.id)}
                        className={' text-black/70 hover:text-black'}
                      >
                        <EllipsisVertical size={16} />
                      </button>
                      {data.title}
                    </div>
                  </td>
                  <td data-title="Amount">
                    <div>
                        <AmountColumn income={data.income} amount={data.amount} />
                    </div>
                  </td>
                  <td data-title="Category">{data.category}</td>
                  <td data-title="Date">{formatDisplayDateID(data.date)}</td>
                  {openDetails[data.id] && (
                    <td data-title="Detail : " className={styles.detailCell}>
                      <br />
                      <p>{data.detail || 'No detail available'}</p>
                    </td>
                  )}
                  <td data-title="Action">
                    <div className={ styles.action + ' flex items-center gap-1'}>
                      <Trash2 className={styles.icon + ' p-1 bg-danger rounded text-white cursor-pointer'} onClick={() => setdeleteId(data.id)}/>
                      <SquarePen className={styles.icon + ' p-1 bg-yellow rounded text-white cursor-pointer'} onClick={() => setEditId(data.id)} />
                    </div>
                  </td>
                </tr>
                {openDetails[data.id] && (
                  <tr className={styles.detail}>
                    <td colSpan={5} className='border-b'>
                      <div className='text-sm py-2 px-2 bg-gray-50'>
                        <span className='font-semibold'>Detail: </span>
                        {data.detail || 'No detail available'}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            </tbody>
          </table>
          <Pagination/>
         {EditId && selectedData && (
            <ModalEditForm
              data={selectedData}
              onClose={() => setEditId(null)}
            />
          )}
          {deleteId && (
            <ModalDelete
              data={selectedData}
              onClose={() => setdeleteId(null)}
            />
          )}  
        </div>
        
    )
}
export default Table