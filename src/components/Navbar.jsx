import React from 'react'
import { logos, navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
        <nav className='flex flex-row min-w-screen justify-between items-center px-10'>
            <img src={logos[0].src} className='w-[130px] h-20' alt={logos[0].name} />

            <ul className="flex flex-row gap-3">
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <a className='font-sans font-bold text-[.9rem] text-gray-700 px-2 py-2 rounded-lg hover:text-black hover:bg-gray-300' href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar