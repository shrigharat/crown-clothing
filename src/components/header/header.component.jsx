import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options-container'>
            <Link className='options' to='/shop'>SHOP</Link>
            <Link className='options' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    <div className='options' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='options' to='/sign-in'>SIGN IN</Link>
            }
        </div>
    </div>

);


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);