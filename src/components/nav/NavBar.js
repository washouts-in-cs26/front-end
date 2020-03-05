import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/register' className='nav-link'>Register</Link>
            <Link to='/move' className='nav-link'>Play</Link>
        </div>
    )
}

export default NavBar