import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action.js'; 

const CollectionItem = ( { item,addItem } ) => {
    const { name,imageUrl,price } = item;
    return (
        <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }} 
        />
        <div className='collection-footer'>
            <span className='name'>
                {name}
            </span>
            <span className='price'>
                {price}
            </span>
        </div>
        <CustomButton 
            onClick={() => addItem(item)} 
            inverted>
                ADD TO CART
        </CustomButton>
    </div>
    );
    //onClick={() => addItem(item)} : this addItem(item) is from mapDispatchToProps(left side) 
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});
//here we are adding new item(setting the state) to cartItems array props in cartReducer

export default connect(null,mapDispatchToProps)(CollectionItem);