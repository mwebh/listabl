import React from 'react'
import Link from 'next/link'

export default function Header() {

    const links = [
        // {
        //     name: "Home",
        //     link: "/"
        // }
    ]

  return (
    <div
        className='flex justify-between w-screen h-max px-10 py-4 bg-neutral-700 items-center sticky top-0'
    >
        <div>
            <h2 className=' text-neutral-50 text-xl'>LISTABL</h2>
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
