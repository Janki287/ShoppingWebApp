import {createSelector} from 'reselect';

const selectCart = (state) => state.cart;
//state this is rootReducer object (same as we are using in mapStateToProps)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((totalItems,cartItem) => totalItems + cartItem.quantity , 0) 
);
