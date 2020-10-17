import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import './header.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHiddenStatus} from "../../redux/cart/cart.selectors";

const Header = ({currentUser, hidden, history}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options-container'>
            <Link className='options' to='/shop'>SHOP</Link>
            <Link className='options' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    <div className='user-options'>
                        <div className='options' onClick={()=> history.push('/wishlist')}>{currentUser.displayName.toUpperCase()}</div>
                        <div className='options' onClick={() => auth.signOut()}>SIGN OUT</div>
                    </div>
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

export default withRouter(connect(mapStateToProps)(Header));