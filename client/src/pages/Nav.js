import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [storeName, setStoreName] = useState(() => {
        try {
            const name = window.localStorage.getItem('storeName')
            return name ? name : ''
        } catch (e) {
            return ''
        }
    })

    return (
        <>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <Link to='/' className='navbar-brand'>Expy</Link>
                <span className='navbar-text'>{storeName}</span>
                
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarMain' aria-controls='navbarMain' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                
                <div className='collapse navbar-collapse flex-grow-1 text-center' id='navbarMain'>
                    <ul className='navbar-nav ml-auto flex-nowrap'>
                        {
                            window.localStorage.getItem('token') ? 
                        <li className='nav-item'>
                            <Link to={'/user'} className='nav-link'>Dashboard</Link>
                        </li>
                            :
                        <li className='nav-item'>
                            <Link to={'/user'} className='nav-link'>Login/Register</Link>
                        </li>
                        } 
                    </ul>
                
                </div>
            </nav>
        </>
    )
}

export default Nav