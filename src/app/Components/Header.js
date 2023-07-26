import React from 'react'
import Link from 'next/link'
import Logo from "../../Images/Listabl.png"

export default function Header({color, list}) {

  return (
    <div
        className='flex justify-between max-w-screen h-max px-10 py-4 items-center relative top-0 transition-colors duration-500'
        style={{backgroundColor: color}}
    >
        <div>
            <img src={Logo.src} alt="Listabl" className=' max-h-10' />
        </div>
        <div className=' px-4 py-2 bg-neutral-50 rounded'>
            {list && <p>Items: {list.length}</p>}
            {!list && <p>Items: 0</p>}
        </div>

    </div>
  )
}
