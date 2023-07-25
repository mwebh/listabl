import React from 'react'
import Link from 'next/link'
import Logo from "../../Images/Listabl.png"

export default function Header({color}) {

    const links = [
        // {
        //     name: "Home",
        //     link: "/"
        // }
    ]

  return (
    <div
        className='flex justify-between w-screen h-max px-10 py-4 items-center relative top-0 transition-colors duration-500'
        style={{backgroundColor: color}}
    >
        <div>
            <img src={Logo.src} alt="Listabl" className=' max-h-10' />
        </div>
        <div className='flex gap-4'>
            {
                links.map(link => {
                    return (
                        <Link href="/" key={link.name} className='text-white shadow-lg px-4 py-2 hover:bg-neutral-600 rounded transition-all duration-200 active:bg-neutral-800'>
                            {link.name}
                        </Link>
                    )
                })
            }
        </div>

    </div>
  )
}
