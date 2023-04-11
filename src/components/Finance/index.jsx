import Button from 'components/Button'
import { useState } from 'react'
import uuid4 from 'uuid4'

function Finance(props) {

    const { addFinance } = props
    const [sumFinance, setSumFinance] = useState('')
    const [formError, setFormError] = useState(null)


    const handleClick = event => {
        event.preventDefault()
        if (parseInt(sumFinance) > 0) {
            const cost = {
                sumFinance,
                id: uuid4(),
                date: new Date()
            }

            addFinance(cost)
            setSumFinance('')
        } else {
            setFormError('Поле не может быть пустым, введите данные')
        }

    }

    const changeHandler = e => {
        const value = e.target.value
        e.target.value = value.replace(/\D/g, '')
    }

    return (
        <div className='px-8'>
            <div className="text-red-600 mx-6 mt-8 p-2">{formError}</div>
            <form className="flex justify-start gap-3 mx-8">
                <label className='text-xl font-semibold'>Доходы</label>
                <input name="finance"
                    placeholder="сумма"
                    value={sumFinance}
                    onInput={changeHandler}
                    onChange={(event) => {
                        setFormError(null)
                        setSumFinance(event.target.value)
                    }}
                    className="border border-solid border-gray-400 rounded p-2"
                    required
                />
                <Button title={"Добавить"} handleClick={handleClick} type="submit" />
            </form>
        </div>
    )
}

export default Finance