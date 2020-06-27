import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { clearItemFromCart,removeItem,addItem } from "../../redux/cart/cart.action.js";

const CheckoutItem = ({ cartItem,clearItemFromCart,addItem,removeItem }) => {
  //clearItemFromCart,addItem,removeItem these are from mapDispatchToProps(left side)
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)} >&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)) 
});
//here we are triggering(setting the state) the clearItemFromCart(item),addItem(item),removeItem(item) action from cart.actions.js
//that is why we are using mapDispatchToProps

export default connect(null, mapDispatchToProps)(CheckoutItem);
