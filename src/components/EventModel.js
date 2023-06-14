import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

const labelsClasses = [
    "bg-indigo-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-red-500",
];

export default function EventModel() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0])
  const { setShowEventModel, daySelected, dispatchCalEvent } = 
    useContext(GlobalContext)

  function handleSubmit(e){
    e.preventDefault()
    const calendarEvent={
        title,
        description,
        label: selectedLabel,
        day: daySelected.valueOf(),
        id: Date.now()
    }
    dispatchCalEvent({type: 'push', payload: calendarEvent})
    setShowEventModel(false)
  }
  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
      <form className='bg-white rounded-lg shadow-2xl w-1/4'>
        <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
          <span className='material-icons-outlined text-gray-400'>
            drag_handle
          </span>
          <button onClick={() => setShowEventModel(false)}>
            <span className='material-icons-outlined text-gray-400'>
              close
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name='title'
              placeholder='Başlık Ekle'
              value={title}
              required
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className='material-icons-outlined text-gray-400'>
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className='material-icons-outlined text-gray-400'>
              segment
            </span>
            <input
              type="text"
              name='description'
              placeholder='Açıklama ekle'
              value={description}
              required
              className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className='material-icons-outlined text-gray-400'>
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`${lblClass} w-5 h-5 rounded-full flex items-center justify-center cursor-pointer`}
                >
                    {selectedLabel === lblClass &&(
                        <span className='material-icons-outlined text-white text-sm'>
                            check
                        </span>
                    )}                 
                </span>
              ))}
            </div>
          </div>
        </div>
         <footer className=' flex justify-end border-t p-3 mt-5'>
            <button 
                type='submit' 
                onClick={handleSubmit}
                className='bg-yellow-200 hover:bg-yellow-400 px-6 py-2 rounded text-amber-900'>
                Kaydet
            </button> 
        </footer> 
      </form>
    </div>
  )
}
