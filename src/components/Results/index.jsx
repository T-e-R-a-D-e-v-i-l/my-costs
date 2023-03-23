import {categories} from 'components/CostsForm'

function Results ({costs}) {

    const sumall = costs.map(item => item.sum).reduce((sum, el) => sum + parseInt(el), 0);

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
        <div className='flex'>
            <div className='flex flex-col items-start px-16 gap-3'>
                <h2 className='text-lg font-bold underline'>Учет расходов</h2>
                {categories.map((category) => {
                    return(
                        <div className='flex gap-2'>
                            <button className="hover:underline">{category}:</button>
                            <p>{getCategoryAmount(category)}</p>
                        </div>
                    )
                })}
                <p className='text-2xl font-bold'>Итого : {sumall}</p>
            </div>
            <div className='pl-20'>
                <h2 className='text-lg font-bold underline'>Учет доходов</h2>
            </div>
        </div>

    )
}

export default Results