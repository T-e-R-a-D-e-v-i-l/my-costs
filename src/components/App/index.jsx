import CostForm from 'components/CostsForm';
import { useState } from 'react';
// import { v4 as uuid4 } from 'uuid';
import './App.css';
import Results from 'components/Results'
import { format } from "date-fns"
import { ru } from "date-fns/locale";

function App() {

    const [costs, setCosts] = useState([])
    
    const reversedСosts= costs.reverse()
    console.log(reversedСosts)

    const addCosts = (cost) => {
        setCosts([...costs, cost])
    }

    return (
        <div className='background bg-no-repeat py-10'>
            <div className='max-w-screen-md mx-auto shadow-xl rounded-3xl bg-slate-200 py-12 my-20'>
            <h1 className='text-3xl text-center font-semibold'>Учет расходов</h1>
            <CostForm addCosts={addCosts}/>
            <Results />
            {costs.map((cost) => {
                return(
                    <div key={cost.id} className=' flex justify-between p-4 mx-10 border-bottom-solid'>
                        <div>
                            <p className='text-indigo-700'>{format(cost.date, "dd MMMM yyyy, HH:mm",  {locale: ru} )}</p>
                            <p className='text-lg '>{cost.category}</p>
                        </div>
                        <p className='text-lg font-medium text-slate-700'>- {cost.sum} ₽</p>
                    </div>
                )
            })}
        </div>
        </div>
    );
}

export default App;
