import React from 'react'

export default function Modal({modal, setModal, color}) {

    const tips = [
        {
            title: "Changing Colours",
            id:1,
            desc:"When you change the colour of your list item in Listabl, the header will change with it. Also if you leave the site after adding a new item. When you next return, the header will turn to the colour of the item you most rceently added making it easy to pick up where you left off!"
        },
        {
            title: "Creating new items",
            id:2,
            desc:"Creating new items is as simple as entering the item name, choosing a colour and clicking or tapping Add. You don't have to change the colour if you don't want to however this can help distinguish between tasks."
        }
    ]

  return (
    <div className={`fixed z-40 top-0 left-0 w-screen h-screen bg-neutral-800/30 backdrop-blur-sm ${modal ? 'opacity-100 pointer-events-auto delay-0' : 'opacity-0 pointer-events-none delay-500'} transition-all duration-200 flex justify-center items-center`}>
        <div className={`h-[80dvh] w-1/3 max-w-lg min-w-[300px] bg-neutral-50 rounded-lg shadow-md flex flex-col gap-6 py-6 px-4 overflow-y-scroll ${modal ? 'opacity-100 pointer-events-auto delay-200 translate-x-0' : 'opacity-0 pointer-events-none delay-200 translate-x-8'} transition-all duration-200`}>
            <div className=' flex justify-between items-center max-w-full'>
                <h2 className=' font-bold text-2xl'>Tips & Tricks</h2>
                <button
                    onClick={() => setModal(!modal)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p className='my-4'>To help you get the most out of Listabl. Here are some tips and things you may not know.</p>
            {
                tips.map(tip => {
                    return (
                        <div 
                            key={tip.id}
                            className=' border-y-2 py-10'
                            style={{borderTopColor: color, borderBottomColor: color}}
                        >
                            <h3 className=' font-semibold mb-4'>{tip.title}</h3>
                            <p>{tip.desc}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
