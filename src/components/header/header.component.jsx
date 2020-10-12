import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {createStructuredSelector} from "reselect";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import './header.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHiddenStatus} from "../../redux/cart/cart.selectors";

const Header = ({currentUser, hidden}) => (
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
            <CartIcon />
            {
                hidden ? null : <CartDropdown/>
            }
        </div>

    </div>

);


const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHiddenStatus
    }
);

export default connect(mapStateToProps)(Header);