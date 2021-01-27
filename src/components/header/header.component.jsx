import React from "react";
import {connect} from "react-redux";
import {auth} from "../../firebase/firebase.utils";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHiddenStatus} from "../../redux/cart/cart.selectors";
import {
    HeaderContainer,
    LogoContainer,
    OptionLink,
    OptionsContainer,
    UserOptionsContainer
} from "./header.styles";
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({currentUser, hidden, history, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ?
                    <UserOptionsContainer>
                        <OptionLink as='div' onClick={()=> history.push('/wishlist')}>{currentUser.displayName.toUpperCase()}</OptionLink>
                        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    </UserOptionsContainer>
                    :
                    <OptionLink to='/sign-in'>SIGN IN</OptionLink>
            }
            <CartIcon />
            {
                hidden ? null : <CartDropdown/>
            }
        </OptionsContainer>
    </HeaderContainer>

);


const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHiddenStatus
    }
);

const dispatchToProps = dispatch => (
    {
        signOutStart: () => dispatch(signOutStart())
    }
);

export default withRouter(connect(mapStateToProps, dispatchToProps)(Header));