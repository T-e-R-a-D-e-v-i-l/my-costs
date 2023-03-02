import CostForm from 'components/CostsForm';
import { useState } from 'react';
import './App.css';
import Results from 'components/Results'
import Cost from 'components/Cost'


function App() {

    const [costs, setCosts] = useState([])

    const addCosts = (cost) => {
        setCosts([...costs, cost])
    }

  return (
    <div className='max-w-screen-md mx-auto shadow-xl rounded-3xl bg-slate-200 py-12 my-20'>
        <h1 className='text-3xl text-center font-semibold'>Учет расходов</h1>
        <CostForm addCosts={addCosts}/>
        <Results />
        <Cost />
        {costs.map((cost) => {
            return(
                <div className=' flex justify-between p-4 mx-10 border-bottom-solid'>
                    <div>
                        <p className='text-indigo-700'>{cost.date}</p>
                        <p className='text-lg '>{cost.category}</p>
                    </div>
                    <p className='text-lg font-medium text-slate-700'>- {cost.sum} ₽</p>
                </div>
            )
        })}
    </div>
  );
}

export default App;
