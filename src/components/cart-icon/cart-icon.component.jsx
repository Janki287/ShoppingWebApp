import React from 'react';

import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';

import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon = ( { toggleCartHidden } ) => (
    //this toggleCartHidden is from mapDispatchToProps (left side)
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
            {0}
        </span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
//after clicking on the cart-icon, we are setting the hidden value to true and false using toggleCartHidden() cart.action.js

export default connect(null,mapDispatchToProps)(CartIcon);