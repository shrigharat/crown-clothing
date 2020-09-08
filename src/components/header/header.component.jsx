import React from "react";
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import './header.styles.scss';

const Header = (props) => (
    <div className='header'>
        <Link to='/' classname='logo-container'>
            <Logo classname='logo'/>
        </Link>
        <div className='options-container'>
             <Link className='options' to='/shop'>SHOP</Link>
            <Link className='options' to='/contact'>CONTACT</Link>
        </div>
    </div>

);

export default Header;