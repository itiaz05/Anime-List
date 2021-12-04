import React from 'react';
import logo from './obito_logo.jpg'
import style from './Header.module.css'

const Logo = ({pictureAlt}) => {
    return (
        <div>
            <img src={logo} alt={pictureAlt} className={style.logoImage}/>
        </div>
    );
};

export default Logo;