import React from 'react'
import './nav.css'

function Nav() {
  return (
    <nav className='container mx-auto p-6'>
      <div className='flex justify-between'>
        <div className='pt-2 text-3xl font-bold'>Unduloid</div>
        <div className="md:flex space-x-9 hidden">
          <a href="#about" className='hover:text-primary'>About</a>
          <a href="#portfolio" className='hover:text-primary'>Portfolio</a>
          <a href="#contact" className='hover:text-primary'>Contact</a>
        </div>

        <a href="#" 
        className="px-5 pt-2 p-3 baseline text-primary bg-error rounded-full hidden md:block hover:bg-error-content"
        >
          Get Quotation
        </a>
        <div className="dropdown md:hidden">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabindex="0"
           className="menu menu-vertical dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box right-9">
            <li>
              <a href="#about" className='hover:text-primary'>About</a>
            </li>
            <li>
              <a href="#portfolio" className='hover:text-primary'>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className='hover:text-primary'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
