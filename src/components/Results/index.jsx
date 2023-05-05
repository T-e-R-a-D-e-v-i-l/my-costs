import { categories } from 'components/CostsForm'
import { filterByMonth } from 'filterByMonth'


function Results({ costs, setCategory, month }) {
    const filtredCosts = filterByMonth(costs, month)

    const getCategoryAmount = (category) => {
        const filtered = filtredCosts.filter(cost => {
            if (category === cost.category) {
                return true
            } else {
                return false
            }
        })
        const sum = filtered.reduce((prev, current) => prev + parseInt(current.sumCost), 0)
        return sum
    }

    const getFinanceAmount = (sumFinance) => {
        const filterFinance = filtredCosts.filter(cost => {
            if (cost.sumFinance) {
                return true
            } else {
                return false
            }
        })
        const resultFinance = filterFinance.reduce((prev, current) => prev + parseInt(current.sumFinance), 0)
        return resultFinance
    }

    const getCostsAmount = (sumCost) => {

        const filterCost = filtredCosts.filter(cost => {
            if (cost.sumCost) {
                return true
            } else {
                return false
            }
        })
        const resultCosts = filterCost.reduce((prev, current) => prev + parseInt(current.sumCost), 0)
        return resultCosts
    }

    return (
        <div className='flex mt-10 mb-10'>
            <div className='flex flex-col items-start px-16 gap-3'>
                <h2 className='text-2xl font-bold underline'>Учет расходов</h2>
                {categories.map((category) => {
                    return (
                        <div key={category} className='flex gap-2'>
                            <button
                                onClick={() => setCategory(category)}
                                className="hover:underline text-zinc-800 text-lg font-medium">{category}:</button>
                            <p>{getCategoryAmount(category)}</p>
                        </div>
                    )
                })}
                <button
                    // onClick={() => }
                    className='hover:underline text-2xl font-bold'>Расходы : {getCostsAmount()} ₽</button>
            </div>
            <div className='pl-20'>
                <h2 className='text-2xl font-bold underline'>Учет доходов</h2>
                <p className='text-2xl font-bold pt-10'>Доходы: {getFinanceAmount()} ₽</p>
            </div>
        </div>

    )
}

export default Results