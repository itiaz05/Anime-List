import React from 'react';
import style from './Header.module.css'

const Headline = ({text}) => {
    return (
        <div>
            <h1 className={style.headHeadline}>{text}</h1>
        </div>
    );
};

export default Headline;