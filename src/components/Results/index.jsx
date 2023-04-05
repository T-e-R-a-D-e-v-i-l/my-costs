import { categories } from 'components/CostsForm'

function Results({ costs }) {

    const getCategoryAmount = (category) => {
        const filtered = costs.filter(cost => {
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
        const filterFinance = costs.filter(cost => {
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
        const filterCost = costs.filter(cost => {
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
                            <button className="hover:underline text-zinc-800 text-lg font-medium">{category}:</button>
                            <p>{getCategoryAmount(category)}</p>
                        </div>
                    )
                })}
                <p className='text-2xl font-bold'>Расходы : {getCostsAmount()} ₽</p>
            </div>
            <div className='pl-20'>
                <h2 className='text-2xl font-bold underline'>Учет доходов</h2>
                <p className='text-2xl font-bold pt-10'>Доходы: {getFinanceAmount()} ₽</p>
            </div>
        </div>

    )
}

export default Results