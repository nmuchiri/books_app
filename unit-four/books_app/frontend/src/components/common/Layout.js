import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {logout, getCurrentUser} from '../../services/auth.service'


const Layout = (props) => {
    

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        // grab getCurrentUser from the auth service
        const user = getCurrentUser()

        if (user) {
            //setCurrentUser to the current user state
            setCurrentUser(user);
        }
        //empty array is a listener - everytime we want something to change, we have this listener
        // the listener is empty when there's not any prerequisite to listen to
    }, [])

    const logOut = () => {
        logout()
        console.log("user logged out")
    }

    return (
        <div>
            <nav className='navbar navbar-expand navbar-light'>
                <div className="container-fluid">
                    <div>
                    <Link to='/' className='navbar-brand'>
                        Books
                    </Link>
                    </div>

                    <div>
                    <Link to='/profile' className='navbar-brand'>
                        Profile
                    </Link>
                    </div>
                    {currentUser ?
                        <div className='navbar-nav ml-auto'>
                            
                            <li className='nav-item'>
                                <Link to={'/'}>
                                    {/* {currentUser.username}'s Profile */}
                                </Link>
                                <div className='navbar-nav mr-auto'>
                                    <li className='nav-item'>
                                    <Link to={'/books'} className='nav-link'>
                                Add a Book
                                </Link>
                        </li>
                    </div>
                                <a href='/login' className='nav-item nav-link block' onClick={logOut}>Logout</a>
                            </li>
                        </div> 
                         : 
                        <div className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link to={'/login'} className='nav-link'>
                                    Login
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/signup'} className='nav-link'>
                                    Sign Up
                            </Link>
                            </li>
                        </div>

                        } 
                </div>
            </nav>
            <div className='container mt-3'>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
