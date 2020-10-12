import React from "react";
import {connect} from "react-redux";

import {toggleCartHidden} from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCartIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = state => (
    {
        itemCount: selectCartItemsCount(state)
    }
);

const dispatchToProps = dispatch => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
);

export default connect(mapStateToProps, dispatchToProps)(CartIcon);