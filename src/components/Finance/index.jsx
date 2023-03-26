import Button from 'components/Button'
import { useState } from 'react'
import uuid4 from 'uuid4'

function Finance (props) {

    const { addFinance  } = props
    const [sumFinance, setSumFinance] = useState('')

    const handleClick = event => {
        event.preventDefault()
        const cost = {
            sumFinance,
            id: uuid4(),
            date: new Date()
        }

        addFinance(cost)
        setSumFinance('')
    }
    
    return (
        <div className='px-8'>
            <form className="flex justify-start gap-3 m-8">
                <label className='text-xl font-semibold'>Доходы</label>
                <input name="finance"
                    placeholder="сумма" 
                    value={sumFinance}
                    onChange={(event) => {setSumFinance(event.target.value)}}
                    className="border border-solid border-gray-400 rounded p-2"
                />
                <Button title={"Добавить"} handleClick={handleClick} type="submit"/>
            </form>
        </div>
    )
}

export default Finance