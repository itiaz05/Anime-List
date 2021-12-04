import React from 'react';
import Logo from './Logo';
import style from './Header.module.css'

const Header = ({pictureAlt, msg}) => {
    return (
        <div className="header_container">
            <p className={style.visitor_message}>{msg}
            <Logo alt={pictureAlt}/>
            </p>
        </div>
    );
};

export default Header;
