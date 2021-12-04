import React from 'react';
import style from './Anime.module.css'

//at rating -> need to use MUI component

const Anime = (name, rating) => {
    return (
        <div className={style.AnimeFrame}>
            <p>Name: {name}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Anime;