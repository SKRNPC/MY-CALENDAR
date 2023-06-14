import React, {useEffect, useState}from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

export default function ContextWrapper(props) {
    const[monthIndex, setMonthIndex]= useState(dayjs().month())
    const[smallCalendarMonth, setSmallCalendarmonth]= useState(null)
    const[daySelected, setDaySelected]= useState(null)
    useEffect(()=>{
        if(smallCalendarMonth !== null){
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth])
    
    return (
    <GlobalContext.Provider 
        value={{
            monthIndex,
            setMonthIndex, 
            smallCalendarMonth, 
            setSmallCalendarmonth,
            daySelected,setDaySelected
        }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

 