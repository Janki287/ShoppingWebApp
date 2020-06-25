import React from 'react';

import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';

import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors.js';

import {createStructuredSelector} from 'reselect';

const CartIcon = ( { toggleCartHidden,totalItemCount } ) => (
    //totalItemCount this is from mapStateToProps(left side)
    //this toggleCartHidden is from mapDispatchToProps (left side)

    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
            {totalItemCount}
        </span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
//after clicking on the cart-icon, we are setting the hidden value to true and false using toggleCartHidden() cart.action.js

const mapStateToProps = createStructuredSelector ({
    totalItemCount: selectCartItemsCount
});
//above code is the same as the previous code but here we are using the reselect library

////here we are getting the cartItems(array) props from cart.reducer.js
////we are summing up all the quantity together here(not setting the state)
////the state is already set in collection-item.component.jsx file


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);