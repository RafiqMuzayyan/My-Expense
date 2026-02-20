"use client"
import Button from '@/components/FormItem/Button'
import BasicInput from '../../FormItem/BasicInput'
import SelectInput from '@/components/FormItem/SelectInput'
import { categories } from '../table/data'
import { formatInputDate } from '@/utilities/formatDisplayDate'
import ModalWrapper from './ModalWrapper'
import RadioButton from '@/components/FormItem/RadioButton'

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
        <ModalWrapper onSubmit={handleSubmit}>
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
                        <RadioButton
                            id='income'
                            name='type'
                            value='INCOME'
                            label='Income'
                            defaultChecked={transaction.type === "INCOME"}
                        />
                        <RadioButton
                            id='expense'
                            name='type'
                            value='EXPENSE'
                            label='Expense'
                            defaultChecked={transaction.type === "EXPENSE"}
                        />
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
        </ModalWrapper>  
    </>
          
      )
}

export default ModalEditForm
