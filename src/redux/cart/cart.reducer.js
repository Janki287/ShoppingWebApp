import {cartActionTypes} from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,//this statement is necessary otherwise hidden: true will also fire on hitting the cartActionTypes.ADD_ITEM action
                cartItems: addItemToCart(state.cartItems,action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;