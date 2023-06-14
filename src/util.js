import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()){
    month = Math.floor(month)
    const year =dayjs().year()
    const ayinIlkGunu = dayjs(new Date(year, month, 0)).day()
    let currentAySayac = 0 - ayinIlkGunu

    const daysMatrix= new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentAySayac++
            return dayjs(new Date(year, month, currentAySayac))
        })
    })
    return daysMatrix
}