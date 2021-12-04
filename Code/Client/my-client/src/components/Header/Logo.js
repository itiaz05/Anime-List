import React from 'react';
import logo from './anime_logo.jpg'
import style from './Header.module.css'

const Logo = ({pictureAlt}) => {
    return (
        <div>
            <img src={logo} alt={pictureAlt} className={style.logo_container}/>
        </div>
    );
};

export default Logo;