import React from "react";
import {connect} from "react-redux";

import {toggleCartHidden} from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCartIcon className='shopping-icon'/>
        <span className='item-count'>10</span>
    </div>
);

const dispatchToProps = dispatch => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
);

export default connect(null, dispatchToProps)(CartIcon);