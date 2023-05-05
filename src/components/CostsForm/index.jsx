import Button from 'components/Button'
import { useState } from 'react'
import uuid4 from 'uuid4'


export const categories = [
    'Еда',
    'Коммунальные платежи',
    'Образование',
    'Транспорт',
    'Развлечения',
    'Лекарства',
    'Прочее'
]

function CostForm(props) {
    const { addCosts } = props
    const [sumCost, setSumCost] = useState('')
    const [sumFinance, setSumFinance] = useState('')
    const [category, setCategory] = useState(categories[0])
    const [formError, setFormError] = useState(null)

    const handleClick = event => {
        event.preventDefault()
        if (parseInt(sumCost) > 0) {
            const cost = {
                sumCost,
                sumFinance,
                category,
                id: uuid4(),
                date: new Date()
            }
            addCosts(cost)
            setSumCost('')
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
        <div className='pt-4'>
            <div className="text-red-600 mx-12 p-2">{formError}</div>
            <form className="flex justify-center gap-3 mx-8">
                <label className='text-xl font-semibold'>Расходы</label>
                <input
                    onChange={(event) => {
                        setFormError(null)
                        setSumCost(event.target.value)
                    }}
                    value={sumCost}
                    name="sum"
                    onInput={changeHandler}
                    placeholder="сумма"
                    className="border border-solid border-gray-400 rounded p-2"
                    required
                />
                <select className="col-span-2 border border-solid border-gray-400 rounded p-2"
                    value={category}
                    onChange={(event) => {
                        // console.log(event.target.value)
                        setCategory(event.target.value)
                    }}>

                    {categories.map(c => {
                        return (
                            <option key={c}>{c}</option>
                        )
                    })}
                </select>
                <Button title={"Добавить"} handleClick={handleClick} type="submit" />
            </form>
        </div>
    )
}

export default CostForm
