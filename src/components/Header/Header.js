import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                user?.uid ?
                <button className='button-logout' onClick={logOut}>Log Out</button>
                :
                <>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign up</Link>
                </>
                }
            </div>
        </nav>
    );
};

export default Header;