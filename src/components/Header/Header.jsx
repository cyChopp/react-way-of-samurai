import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt="back" />
        <div className={s.loginBlock}>
        {props.isLogged ?<div>{props.login}-<button onClick={props.logoutForm}>Log out</button></div> :
            <div>
            <NavLink to={'/login'}>Login</NavLink>
            </div>
        }
        </div>

    </header>
}

export default Header;