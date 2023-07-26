import React from 'react'

export default function IncrementButton({inputValue, setInputValue, addList, color, setColor, dueDate, setDueDate}) {
  return (
    <div
        className="flex flex-col gap-2 items-start w-1/3 max-w-md min-w-[300px] mx-auto relative"  
      >
        <form className='flex gap-2 items-center justify-between w-full'>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex gap-2 items-center w-full'>
              <input 
                type='text' 
                value={inputValue}
                placeholder='Add Item'
                onChange={(e) => setInputValue(e.target.value)}
                className={`${inputValue ? 'bg-neutral-100' : 'bg-neutral-200'} p-2 rounded-lg transition-all duration-200 w-full text-base`}
              />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-black transition-colors duration-500`}
                style={{backgroundColor: color}}
              >
                <input type='color' className=' pointer-events-auto opacity-0 cursor-pointer' onChange={(e) => setColor(e.target.value)} value={color} />
              </div>
            </div>
            <label
              className={`w-full flex gap-2 items-center p-2 h-max rounded-lg ${dueDate === "" ? 'bg-neutral-200' : 'bg-neutral-100'} transition-all duration-200`}  
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className=' bg-transparent' />
            </label>
          </div>
          <button
            type='submit'
            onClick={(e) => addList(e)}
            className={`py-2 text-base w-20 rounded-lg active:brightness-90 transition-all duration-200 ${inputValue ? 'text-neutral-50 bg-blue-500 pointer-events-auto' : 'text-neutral-400 pointer-events-none'}`}
          >
            Add
          </button>
        </form>

      </div>
  )
}
