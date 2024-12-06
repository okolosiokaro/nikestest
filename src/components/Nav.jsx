import { headerLogo } from '../assets/images';
import { chevronLeft, hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const   Nav = () => {
const [nav, setNav] = useState(false);
const showNav = () => {
    setNav(!nav);
}
nav ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden') 

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img 
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block justify-end">
                <img
                src={nav? chevronLeft : hamburger}
                alt="Hamburger"
                width={30}
                height={30}
                onClick={showNav}
                />
            </div>
        </nav>


        <div   onClick={showNav} className={nav ? 'fixed left-0 top-0 w-full h-full bg-black/50 z-20': ''}></div>
        <nav className={nav ? 'bg-white fixed left-0 top-0 z-50 h-full w-[300px] p-4 ease-in-out duration-300 rounded-r-xl' : 'fixed -left-full'}>
            <div className='flex justify-between py-5 mb-5'>
               <a href="/">
                <img 
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
                />
                </a>

                <img
                src={nav? chevronLeft : hamburger}
                alt="Hamburger"
                width={30}
                height={30}
                onClick={showNav}
                className=''
                />
            </div>
           
            <ul className="flex-1 flex flex-col gap-8 p-4">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                        onClick={showNav}
                        >
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>

    </header>
  )
}

export default Nav
