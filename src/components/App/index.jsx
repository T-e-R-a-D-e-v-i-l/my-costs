import CostForm from 'components/CostsForm';
import { useState } from 'react';
// import { v4 as uuid4 } from 'uuid';
import './App.css';
import Results from 'components/Results'
import { format } from "date-fns"
import { ru } from "date-fns/locale";
import Finance from 'components/Finance'
import Diagram from 'components/Diagram'

function App() {

    const [costs, setCosts] = useState([])
    
    const reversedСosts= costs.reverse()
    
    const addCosts = (cost) => {
        setCosts([...costs, cost])
    }

    const addFinance = (cost) => {
        setCosts([...costs, cost])
    }

    return (
        <div className='background bg-no-repeat py-10'>
            <div className='max-w-screen-md mx-auto shadow-xl rounded-3xl bg-slate-200 py-12 my-20'>
                <h1 className='text-5xl text-center font-semibold pb-8'>Анализ финансов</h1>
                <Finance addFinance={addFinance}/>
                <CostForm addCosts={addCosts} reverse={reversedСosts}/>
                <Diagram />
                <Results costs={costs}/>
                {costs.map((cost) => {
                    return(
                        <div key={cost.id}  className=' flex justify-between p-4 mx-10 border-bottom-solid'>
                            <div>
                                <p className='text-indigo-700'>{format(cost.date, "dd MMMM yyyy, HH:mm",  {locale: ru} )}</p>
                                <p className='text-lg '>{cost.category}</p>
                            </div>
                            <p className='text-lg font-medium text-slate-700'>- {cost.sum} ₽</p>
                            <p className='text-lg font-medium text-slate-700'>+ {cost.finance} ₽</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
