import React, { useContext} from 'react'
import plusImg from '../assets/plus-solid.svg'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
    const{setShowEventModel} =useContext(GlobalContext)
  return (
    <button onClick={() => setShowEventModel(true)} className='border p-w rounded-full flex items-center shadow-md hover:shadow-2xl'>
        <img src={plusImg} alt="create_event" className='pl-2 w-7 h-9' />
        <span className='pl-5 pr-7'>Oluştur</span>
    </button>
  )
}
