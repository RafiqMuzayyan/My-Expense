"use client"
import Button from '@/components/FormItem/Button'
import BasicInput from '../../FormItem/BasicInput'
import SelectInput from '@/components/FormItem/SelectInput'
import { categories } from '../table/data'
import { formatInputDate } from '@/utilities/formatDisplayDate'

const ModalEditForm = ({data, onClose}) => {
    const defaultData = {
        id: '',
        title: '',
        amount: '',
        date: '',
        income: false,
        detail: '',
    }    
    const transaction = data || defaultData
    console.log(transaction.date)
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const payload = {
            id: data.id,
            title: formData.get("title"),
            amount: Number(formData.get("amount")),
            date: formData.get("date"),
            type: formData.get("type"),
            detail: formData.get("detail"),
        }

        console.log(payload) 
        onClose()
    }
    return (
    <>               
        <div className='w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50'>
            <form onSubmit={handleSubmit} className='bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl'>
                {/* Header */}
                <div className='mb-6'>
                    <h1 className='text-2xl font-bold text-black/80'>Edit Transaction</h1>
                    <p className='text-sm text-black/50 mt-1'>Update the details below</p>
                </div>

                {/* Form */}
                <div className=''>

                    {/* Transaction Name */}
                    <div className='grid grid-cols-2 gap-4'>
                        <BasicInput 
                            label='Transaction' 
                            placeholder='e.g., Grocery shopping'
                            name={"title"}
                            defaultValue={transaction.title}      
                            id='transaction'                 
                        />
                        <SelectInput
                            name="category"
                            id="category"
                            defaultValue={transaction.category || ""}
                            label="Category"
                            data={categories}
                            className='w-full'
                        />
                    </div>

                    {/* Amount and Date Row */}
                    <div className='grid grid-cols-2 gap-4'>
                        <BasicInput 
                                type='number' 
                                label='Amount' 
                                placeholder='0'
                                name={"amount"}
                                id='amount'
                                defaultValue={transaction.amount}
                        />
                        <BasicInput 
                                type='date' 
                                label='Date'
                                name = "date"
                                id='date'
                                defaultValue={formatInputDate(transaction.date)}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="detail">Detail</label>
                        <textarea 
                        name="detail" 
                        id="detail"
                        defaultValue={transaction.detail}
                        className='w-full bg-foreground/30 py-2 px-4 rounded shadow-inner ring-0 outline-0 focus:ring-2 focus:ring-secondary/30 transition-all text-sm mb-4'></textarea>
                    </div>

                    {/* Type Selection */}
                    <div >
                        <label className='block text-sm font-medium text-black/80 mb-3'>
                            Type
                        </label>
                        <div className='grid grid-cols-2 gap-3'>
                            <label 
                                htmlFor='income'
                                className='flex items-center justify-center gap-2 p-1 md:p-2 border-2 border-black/10 rounded-lg cursor-pointer transition-all hover:border-succes hover:bg-succes/10 has-checked:border-succes has-checked:bg-succes/10 has-checked:ring-2 has-checked:ring-succes/20'
                            >
                                <input 
                                    type="radio" 
                                    name='type' 
                                    id='income'
                                    value='income'
                                    className='w-4 h-4 text-succes focus:ring-succes'
                                    defaultChecked={transaction.type === "INCOME"}
                                />
                                <span className='font-medium text-black/80'>Income</span>
                                <span className='text-succes'>↑</span>
                            </label>
                            
                            <label 
                                htmlFor='expense'
                                className='flex items-center justify-center gap-2 p-1 md:p-2 border-2 border-black/10 rounded-lg cursor-pointer transition-all hover:border-danger hover:bg-danger/10 has-checked:border-danger has-checked:bg-danger/10 has-checked:ring-2 has-checked:ring-danger/20'
                            >
                                <input 
                                        type="radio" 
                                        name='type' 
                                        id='expense'
                                        value='expense'
                                        className='w-4 h-4 text-danger focus:ring-danger'
                                        defaultChecked={transaction.type === "EXPENSE"}
                                />
                                <span className='font-medium text-black/80'>Expense</span>
                                <span className='text-danger'>↓</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3 mt-6'>
                    <Button className='bg-white border border-black/10 hover:bg-black/10  text-black/70 font-semibold' type="button" onClick={onClose}>
                            Cancel
                        </Button>
                    <Button className='bg-dark-foreground hover:bg-dark-foreground/70  text-black/70 font-semibold' type="submit">
                        Update Transaction
                    </Button>
                </div>
            </form>
        </div>       
    </>
          
      )
}

export default ModalEditForm
