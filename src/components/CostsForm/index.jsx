import Button from 'components/Button' 
import { useState } from 'react'
// import { format } from "date-fns"
// import { ru } from "date-fns/locale";

const categories = ['Еда', 'Коммунальные платежи', 'Образование', 'Транспорт', 'Развлечения', 'Лекарства', 'Прочее']


function CostForm (props) {
    const {addCosts} = props
    const [sum, setSum] = useState('')
    const [category, setCategory] = useState(categories[1])
    // const today = new Date()
    

    const handleClick = event => {
        event.preventDefault()
        const cost = {
            sum,
            category,
            // date: {format(today, "D MMMM YYYY", { locale: ru })}
        }
        addCosts(cost)
        setSum('')
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
                <select className="col-span-2 border border-solid border-gray-400 rounded p-2">
                    value={category}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setCategory(event.target.value)}}
                    
                    {categories.map(category => {
                        return (
                            <option key={category}>{category}</option>
                        )
                    })}
                </select>
                <Button title={"Добавить"} handleClick={handleClick} type="submit"/>
            </form>
        </div>
    )
}

export default CostForm