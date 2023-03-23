import Button from 'components/Button' 
import { useState } from 'react'
import uuid4 from 'uuid4'


export const categories = ['Еда', 'Коммунальные платежи', 'Образование', 'Транспорт', 'Развлечения', 'Лекарства', 'Прочее']

function CostForm (props) {
    const {addCosts} = props
    const [sum, setSum] = useState('')
    const [category, setCategory] = useState(categories[0])
    
    const handleClick = event => {
        event.preventDefault()
        const cost = {
            sum,
            category,
            id: uuid4(),
            date: new Date()
        }
        
        addCosts(cost)
        setSum('')
        // console.log(cost)
    }
   
    return (
        <div>
            <form  className="flex justify-center gap-10 m-8">
                <input 
                    onChange={(event) => {setSum(event.target.value)}}
                    value={sum} 
                    name="sum" 
                    type="number" 
                    placeholder="сумма" 
                    className="border border-solid border-gray-400 rounded p-2"
                />
                <select className="col-span-2 border border-solid border-gray-400 rounded p-2"
                    value={category}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setCategory(event.target.value)}}>
                    
                    {categories.map(c => {
                        return (
                            <option key={c}>{c}</option>
                        )
                    })}
                </select>
                <Button title={"Добавить"} handleClick={handleClick} type="submit"/>
            </form>
        </div>
    )
}

export default CostForm
