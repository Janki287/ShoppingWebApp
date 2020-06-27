import React from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartTotal,selectCartItems} from '../../redux/cart/cart.selectors.js';

const CheckoutPage = ( { cartItems,cartItemsTotal } ) => (
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
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            TOTAL: ${cartItemsTotal}
        </div>
        <div className='test-warning'>
            *Please use following test VISA debit card*
            <br />
                4242 4242 4242 4242 - Exp. Date: Any Future Date - CVV No: Any Three Digit
        </div>
        <StripeButton price={cartItemsTotal} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartTotal
});
////the above code is using the createStructuredSelector();
////the code written in below is alternative of above code
////in below code we are not using createStructuredSelector();
//const mapStateToProps = (state) => ({ cartItems: selectCartItems(state), cartItemsTotal: selectCartTotal(state) });

export default connect(mapStateToProps)(CheckoutPage);