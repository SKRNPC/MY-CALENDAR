import React, {useEffect, useReducer, useState}from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function savedEventsReducer(state, {type, payload}){
    switch (type) {
        case 'push':
            return[...state, payload];
        case'update':
            return state.map(evt => evt.id === payload.id ? payload : evt)
        case 'delete':
            return state.filter(evt => evt.id !== payload.id)
        default:
            throw new Error();
    }
}
function initEvents(){
    const storageEvents = localStorage.getItem('savedEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents 
}

export default function ContextWrapper(props) {
    const[monthIndex, setMonthIndex]= useState(dayjs().month())
    const[smallCalendarMonth, setSmallCalendarmonth]= useState(null)
    const[daySelected, setDaySelected]= useState(dayjs())
    const[showEventModel, setShowEventModel]= useState(false)
    const[selectedEvent, setSelectedEvent]= useState(false)
    const[savedEvents, dispatchCalEvent] = useReducer(
        savedEventsReducer, 
        [],
        initEvents 
        );

        useEffect(()=>{
          localStorage.setItem("savedEvents", JSON.stringify(savedEvents))
        }, [savedEvents])

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
            daySelected,
            setDaySelected,
            showEventModel, 
            setShowEventModel,
            dispatchCalEvent,
            savedEvents,
            selectedEvent,
            setSelectedEvent
        }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

 