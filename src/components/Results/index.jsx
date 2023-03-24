import {categories} from 'components/CostsForm'

function Results ({costs}) {

    const sumAllCosts = costs.map(item => item.sum).reduce((sum, el) => sum + parseInt(el), 0);

    const getCategoryAmount = (category) => {
        const filtered = costs.filter(cost => {
            if (category === cost.category) {
                return true
            }
        })
        const sum = filtered.reduce((prev, current) => prev + parseInt(current.sum), 0)
        return sum
    }
    
    return (
        <div className='flex mt-16'>
            <div className='flex flex-col items-start px-16 gap-3'>
                <h2 className='text-2xl font-bold underline'>Учет расходов</h2>
                {categories.map((category) => {
                    return(
                        <div key={category} className='flex gap-2'>
                            <button className="hover:underline">{category}:</button>
                            <p>{getCategoryAmount(category)}</p>
                        </div>
                    )
                })}
                <p className='text-2xl font-semibold'>Итого : {sumAllCosts}</p>
            </div>
            <div className='pl-20'>
                <h2 className='text-2xl font-bold underline'>Учет доходов</h2>
                <p className='text-2xl font-semibold pt-10'>Итого : </p>
            </div>
        </div>

    )
}

export default Results