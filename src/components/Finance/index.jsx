import Button from 'components/Button'
import { useState } from 'react'
import uuid4 from 'uuid4'

function Finance (props) {

    const { addFinance  } = props
    const [finance, setFinance] = useState('')

    const handleClick = event => {
        event.preventDefault()
        const cost = {
            finance,
            id: uuid4(),
            date: new Date()
        }

        addFinance(cost)
        setFinance('')
    }
    
    return (
        <div className='px-8'>
            <form className="flex justify-start gap-3 m-8">
                <label className='text-xl font-semibold'>Доходы</label>
                <input name="finance"
                    placeholder="сумма" 
                    value={finance}
                    onChange={(event) => {setFinance(event.target.value)}}
                    className="border border-solid border-gray-400 rounded p-2"
                />
                <Button title={"Добавить"} handleClick={handleClick} type="submit"/>
            </form>
        </div>
    )
}

export default Finance