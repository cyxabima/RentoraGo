import React from 'react'
import { Button } from "./ui/button"
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    const isLogged = true
    return (
        <nav className='flex justify-between p-3 shadow-2xs h-18 items-center'>
            <div className='flex h-full items-center'>
                <img src="/logo.png" alt="" width={"80px"}/>
                <span className='font-bold text-3xl'>Carento</span>


            </div>
            <ul className='hidden md:flex gap-16'>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><NavLink to={"/"} className={({ isActive }) => isActive ? "text-primary" : ""}> Home</NavLink></li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-primary" : ""}>Contact</NavLink></li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><NavLink to={"/about"} className={({ isActive }) => isActive ? "text-primary" : ""}>About</NavLink></li>
                {isLogged ?
                    <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><NavLink to={"/Search"} className={({ isActive }) => isActive ? "text-primary" : ""}>Search</NavLink></li>
                    : ""}
            </ul>

            {
                isLogged ? <Button><Link to={"/my_account"}> My Account</Link> </Button> : <Button> <Link to={'/login'}>Login
                </Link>  </Button>
            }

        </nav>
    )
}

export default Header