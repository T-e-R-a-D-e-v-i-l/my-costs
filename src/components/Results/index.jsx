import { useState } from 'react'

function Results () {

    const [results, setResults] = useState([
        {
            name:'Еда',
            amount:0
        },
        {
            name:'Коммунальные платежи',
            amount:0
        },
        {
            name:'Образование',
            amount:0
        },
        {
            name:'Транспорт',
            amount:0
        },
        {
            name:'Развлечения',
            amount:0
        },
        {
            name:'Лекарства',
            amount:0
        },
        {
            name:'Прочее',
            amount:0
        }
    ])

    // const sumall = costs.map(item => item.sum).reduce((sum, el) => sum + el, 0);
    // console.log(sumall)

    // const filtered = costs.filter(cost => {
    //     if (cost.category === "Еда")
    // }).map (cost => {
    //    costs.reduce((prev, current) => prev + cost.sum)
    // })
    
    return (
        <div className='flex flex-col items-start px-16 gap-3'>
            {results.map((result) => {
                return(
                    <div className='flex gap-2'>
                        <button>{result.name}:</button>
                        <p>{result.amount}</p>
                    </div>
                )
            })}
            <p className='text-2xl font-bold'>Итого : </p>
        </div>
    )
}

export default Results