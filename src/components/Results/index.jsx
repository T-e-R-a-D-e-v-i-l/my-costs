import {categories} from 'components/CostsForm'

function Results ({costs}) {

    const sumAllCosts = costs.map(item => item.sumCost).reduce((sumCost, el) => sumCost + parseInt(el), 0);

    const getCategoryAmount = (category) => {
        const filtered = costs.filter(cost => {
            if (category === cost.category) {
                return true
            }
        })
        const sum = filtered.reduce((prev, current) => prev + parseInt(current.sumCost), 0)
        return sum
    }

    const getFinanceAmount = (sumFinance) => {
        const filterFinance = costs.filter(cost => {
            if (sumFinance === cost.sumFinance) {
                return true
            }
        })
        const resultFinance = filterFinance.reduce((prev, current) => prev + parseInt(current.sumFinance), 0)
        return resultFinance
    }

    return (
        <div className='flex mt-16 mb-10'>
            <div className='flex flex-col items-start px-16 gap-3'>
                <h2 className='text-2xl font-bold underline'>Учет расходов</h2>
                {categories.map((category) => {
                    return(
                        <div key={category} className='flex gap-2'>
                            <button className="hover:underline text-zinc-800 text-lg font-medium">{category}:</button>
                            <p>{getCategoryAmount(category)}</p>
                        </div>
                    )
                })}
                <p className='text-2xl font-bold'>Итого : {sumAllCosts}</p>
            </div>
            <div className='pl-20'>
                <h2 className='text-2xl font-bold underline'>Учет доходов</h2>
                <p className='text-2xl font-bold pt-10'>Итого : {getFinanceAmount}</p>
            </div>
        </div>

    )
}

export default Results