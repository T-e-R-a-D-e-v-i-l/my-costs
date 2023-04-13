
export const months = ['За все время', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

// const year = ['2023', '2022']

function FilterDate({ month, setMonth }) {
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
            <select className="col-span-2 border border-solid border-gray-400 rounded p-2"
                value={month}
                onChange={(event) => {
                    setMonth(event.target.value)
                }}>
                {months.map(month => {
                    return (
                        <option key={month}>{month}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FilterDate