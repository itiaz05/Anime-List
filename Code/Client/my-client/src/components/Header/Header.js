import React from 'react';
import Logo from './Logo';
import Headline from './Headline'
import HelloUser from "./HelloUser";

const Header = ({pictureAlt, hiMessage, headerHeadline}) => {
    return (
        <div className="header_container">
            <Headline text={headerHeadline}/>
            <Logo alt={pictureAlt}/>
            <HelloUser message={hiMessage}/>
        </div>
    );
};

export default Header;
