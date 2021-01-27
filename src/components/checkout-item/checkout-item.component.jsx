import React from "react";
import {connect} from "react-redux";

import "./checkout-item.styles.scss";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {addItemToCart} from "../../redux/cart/cart.utils";
import CustomButton from "../custom-button/custom-button.component";
import {addItemToWishlist} from "../../redux/wishlist/wishlist.actions";

const CheckoutItem = ({cartItem, clearCartItem, removeItem, addItem, addItemToWishlist}) => {
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
            <div className='options'>
                <CustomButton className='action-button' onClick={() => clearCartItem(cartItem)}>Remove From Cart</CustomButton>
                <CustomButton className='action-button'
                              onClick={
                                  () => {
                                      addItemToWishlist(cartItem);
                                      clearCartItem(cartItem);
                                  }
                              }
                >
                    Move to wishlist
                </CustomButton>
            </div>
        </div>
    );
};

const dispatchToProps = dispatch => (
    {
        addItem: (item) => dispatch(addItem(item)),
        clearCartItem: (item) => dispatch(clearItemFromCart(item)),
        removeItem: (item) => dispatch(removeItem(item)),
        addItemToWishlist: (item) => dispatch(addItemToWishlist(item))
    }
);

export default connect(null, dispatchToProps)(CheckoutItem);