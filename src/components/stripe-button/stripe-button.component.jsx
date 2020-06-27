import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ( { price } ) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GycuPF16K70cBbr2EV2yvKvE6dYbO0p7DX3iwLyebYvz5i0wB5yHTID2fXJ8YNhVRkq6bE8occjKozFyrFjNBEe0048gIp4mh';

    const onToken = (token) =>{
        console.log(token);
        alert('Payment Successfull');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            description={`You total amount is $${price}`}
            amount={priceForStripe}
            token={onToken}
            name='Crown Clothing By Mohak'
            image='https://sendeyo.com/up/d/f3eb2117da'
            stripeKey={publishableKey}
            billingAddress
            shippingAddress
            panelLabel='Pay Now'
        />
    );
}

export default StripeButton;