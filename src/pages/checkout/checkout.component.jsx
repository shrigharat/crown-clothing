import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import "./checkout.styles.scss";

import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
        }
        <div className='total'>
            <span>TOTAL: ₹ {cartTotal}</span>
        </div>
        <div className='test-warning'>
            *Please use the the following card details for testing purpose <br/>
            4242 4242 4242 4242 - Expiry date: (any future date) of the format mm/yy - CVV: any 3 digit number
        </div>
        <StripeButton price={cartTotal}/>
    </div>
);

const mapStateToProps = state => createStructuredSelector(
    {
        cartItems: selectCartItems,
        cartTotal: selectCartTotal
    }
);

export default connect(mapStateToProps)(CheckoutPage);