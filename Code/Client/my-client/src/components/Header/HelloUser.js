import React from 'react';
import style from './Header.module.css'

const HelloUser = ({message}) => {
    return (
        <div>
            <div className={style.visitorMessage}>{message}</div>
        </div>
    );
};

export default HelloUser;