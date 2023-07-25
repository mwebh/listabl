import React from 'react'

export default function IncrementButton({inputValue, setInputValue, addList, color, setColor}) {
  return (
    <div
        className="flex flex-col gap-2 items-start w-1/3 max-w-md min-w-[300px]"  
      >
        <p className={`text-neutral-400 border-b-2 border-b-neutral-400 text-xs ${inputValue ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-x-0'} transition-all duration-200 w-full`}>Add a new list</p>
        <form className='flex gap-2 items-center justify-between w-full'>
          <input 
            type='text' 
            value={inputValue}
            placeholder='Shopping, Garden Tools etc.'
            onChange={(e) => setInputValue(e.target.value)}
            className={`${inputValue ? 'bg-neutral-50' : 'bg-neutral-100'} p-2 rounded transition-all duration-200 w-full`}
          />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center`}
            style={{backgroundColor: color}}
          >
            <input type='color' className=' pointer-events-auto opacity-0 cursor-pointer' onChange={(e) => setColor(e.target.value)} value={color} />
          </div>
          <button
            type='submit'
            onClick={(e) => addList(e)}
            className={`py-2 w-20 rounded active:brightness-90 transition-all duration-200 ${inputValue ? 'text-neutral-50 bg-blue-500 pointer-events-auto' : 'text-neutral-400 pointer-events-none'}`}
          >
            Add
          </button>
        </form>

      </div>
  )
}
