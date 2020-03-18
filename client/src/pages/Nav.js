import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Nav = ( {store, setStore} ) => {

    let history = useHistory()

    const logOut = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('storeName')
        setStore('')
        history.push('/')
    }

    return (
        <>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                { store ? 
                <Link to='/item' className='navbar-brand'>Expy</Link>
                :
                <Link to='/' className='navbar-brand'>Expy</Link>
                }
                <span className='navbar-text'>{store}</span>
                
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarMain' aria-controls='navbarMain' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                
                <div className='collapse navbar-collapse flex-grow-1 text-center' id='navbarMain'>
                    <ul className='navbar-nav ml-auto flex-nowrap'>
                        {
                            store ?
                        <> 
                            <li className='nav-item'>
                                <Link to={'/dotting'} className='nav-link'>Dotting</Link>
                            </li>
                            <li className='nav-item'>
                                <div className='nav-link' style={{cursor: 'pointer'}} onClick={logOut}>Log Out</div>
                            </li>
                        </>
                            :
                        <>
                            <li className='nav-item'>
                                <Link to={'/dotting'} className='nav-link'>Dotting</Link>
                            </li>
                            <li className='nav-item'>  
                                <Link to={'/user'} className='nav-link'>Login/Register</Link>
                            </li>
                        </>
                        } 
                    </ul>
                
                </div>
            </nav>
        </>
    )

}

export default Nav
