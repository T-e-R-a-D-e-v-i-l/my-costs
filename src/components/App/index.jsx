import CostForm from 'components/CostsForm';
import { useState } from 'react';
import './App.css';
import Results from 'components/Results'
import { format } from "date-fns"
import { ru } from "date-fns/locale";
import Finance from 'components/Finance'
import Diagram from 'components/Diagram'
import FilterDate from 'components/FilterDate';
import { months } from 'components/FilterDate'


function App() {

    const [costs, setCosts] = useState([])
    const [month, setMonth] = useState('За все время')
    const [category, setCategory] = useState(null)

    const reversedСosts = [...costs].reverse()

    const filterByCategory = reversedСosts.filter(c => {

        // console.log(category)
        if (category) {
            if (c.category === category) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    })

    const filterByMonth = filterByCategory.filter(m => {

        let getMonthDate = m.date.getMonth()
        let getMonth = months.indexOf(month)
        getMonthDate++

        if (month === 'За все время') {
            return true
        } else {

            if (getMonthDate === getMonth) {
                return true
            } else {
                return false
            }
        }
    })

    const addCosts = (cost) => {
        setCosts([...costs, cost])
    }

    const addFinance = (cost) => {
        setCosts([...costs, cost])
    }

    return (
        <div className='bg-slate-100 py-20'>
            <div className='max-w-screen-md mx-auto overflow-hidden shadow-xl rounded-3xl bg-stone-100 '>
                <div className='background py-6'>
                    <h1 className='text-5xl text-center font-semibold'>Анализ финансов</h1>
                    <Finance addFinance={addFinance} />
                    <CostForm addCosts={addCosts} />
                    <Diagram costs={costs} />
                    <FilterDate month={month} setMonth={setMonth} />
                    <Results costs={costs} setCategory={setCategory} month={month} />
                </div>
                {filterByMonth.map((cost) => {
                    return (
                        <div key={cost.id} className=' flex justify-between p-4 mx-10 border-bottom-solid'>
                            <div>
                                <p className='text-indigo-700'>{format(cost.date, "dd MMMM yyyy, HH:mm", { locale: ru })}</p>
                                <p className='text-lg'>{cost.category}</p>
                            </div>
                            {cost.sumCost && <p className='text-lg font-medium'>- {cost.sumCost} ₽</p>}
                            {cost.sumFinance && <p className='text-lg font-medium text-slate-700'>+ {cost.sumFinance} ₽</p>}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
