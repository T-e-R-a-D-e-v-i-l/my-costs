import CostForm from 'components/CostsForm';
import { useState } from 'react';
import './App.css';
import Results from 'components/Results'
import { format } from "date-fns"
import { ru } from "date-fns/locale";
import Finance from 'components/Finance'
import Diagram from 'components/Diagram'
import FilterDate from 'FilterDate';

function App() {

    const [costs, setCosts] = useState([])

    const reversedСosts = [...costs].reverse()

    const addCosts = (cost) => {
        setCosts([...costs, cost])
    }

    const addFinance = (cost) => {
        setCosts([...costs, cost])
    }

    const [months, setMonths] = useState('month[1]')

    return (
        <div className='bg-slate-100 py-20'>
            <div className='max-w-screen-md mx-auto overflow-hidden shadow-xl rounded-3xl bg-stone-100 '>
                <div className='background py-6'>
                    <h1 className='text-5xl text-center font-semibold'>Анализ финансов</h1>
                    <Finance addFinance={addFinance} />
                    <CostForm addCosts={addCosts} />
                    <Diagram costs={costs} />
                    <FilterDate />
                    <Results costs={costs} />
                </div>
                {reversedСosts.map((cost) => {
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
