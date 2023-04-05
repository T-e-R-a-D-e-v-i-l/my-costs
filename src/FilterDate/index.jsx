import { useState } from "react"

const month = ['За все время', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

// const year = ['2023', '2022']

function FilterDate() {
    const [months, setMonths] = useState('month[1]')
    // const [years, setYears] = useState('year[1]')

    return (
        <div className="flex justify-end pt-10 pr-20 gap-4">
            {/* <select className="col-span-2 border border-solid border-gray-400 rounded p-2">
                value={years}
                onChange={(event) => { setYears(event.target.value) }}
                {year.map(year => {
                    return (
                        <option key={year}>{year}</option>
                    )
                })}
            </select> */}
            <select className="col-span-2 border border-solid border-gray-400 rounded p-2">
                value={months}
                onChange={(event) => { setMonths(event.target.value) }}
                {month.map(month => {
                    return (
                        <option key={month}>{month}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FilterDate