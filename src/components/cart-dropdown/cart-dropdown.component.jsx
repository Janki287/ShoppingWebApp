import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';

const CartDropdown = ( { cartItems } ) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
            }
        </div>
        <CustomButton>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);