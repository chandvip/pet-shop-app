import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FaCat } from 'react-icons/fa';
const Header = () => {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div >
                        <FaCat className='icon' />
                    </div>

                    <ul>
                        <li><NavLink exact to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/store">Store</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;