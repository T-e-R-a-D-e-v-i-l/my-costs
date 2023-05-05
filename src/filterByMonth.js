export const months = ['За все время', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

export const filterByMonth = (costs, month) => {
    const filterArr = costs.filter(m => {

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

    return filterArr

}