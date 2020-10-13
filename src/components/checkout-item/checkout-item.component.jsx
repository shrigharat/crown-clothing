import React from "react";
import {connect} from "react-redux";

import "./checkout-item.styles.scss";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {addItemToCart} from "../../redux/cart/cart.utils";

const CheckoutItem = ({cartItem, clearCartItem, removeItem, addItem}) => {
    const {name, price, quantity, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl}  alt="product image"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}><i className="fas fa-minus"></i></div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}><i className="fas fa-plus"></i></div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove' onClick={() => clearCartItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const dispatchToProps = dispatch => (
    {
        addItem: (item) => dispatch(addItem(item)),
        clearCartItem: (item) => dispatch(clearItemFromCart(item)),
        removeItem: (item) => dispatch(removeItem(item))
    }
);

export default connect(null, dispatchToProps)(CheckoutItem);