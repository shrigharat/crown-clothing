import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = (price / 74) * 100 ;
    const publishableKey = 'pk_test_51HdL1FFzdf5qRWBhLiBCsPua72dePVv1Pryfmp8oQspHUCrmknrYYnXTXvUgrKOmpMJCAj0XdixXX2zsItkhhjoW00PuxcaLeZ';

    const onToken = token => {
        console.log(token);
        alert('Payment was successful');
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ₹ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;