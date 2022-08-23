// import React from 'react';
import { NavLink } from "react-router-dom"
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }
    return (
        <div className={toggleMenu ? 'navbar expanded' : 'navbar'}>

            <ul>
                <div className='logo'></div>

                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/'>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/upcoming'>Upcoming show</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/media'> Media</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/songs'> Songs</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/account'> Account</NavLink></li>

            </ul>
            <div className="toggle-icon" onClick={toggleNav}>
                {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>
        </div>
    );
};

export default Navbar;