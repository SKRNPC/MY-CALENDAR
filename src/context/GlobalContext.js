import React from "react";
 
const GlobalContext=React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarmonth: (index)=>{},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModel: false,
    setShowEventModel: () => {},
    dispatchCalEvent: ({type, payload}) =>{},
    savedEvents: [],
    selectedEvent: [],
    setSelectedEvent: ()=> {},
    setLabels: () => {},
    labels: [],
    updateLabel:()=> {},
    filteredEvents: [],

});

export default GlobalContext;