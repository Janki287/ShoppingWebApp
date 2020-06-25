import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {connect} from 'react-redux';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors.js';

import {createStructuredSelector} from 'reselect';

const Header = ( { currentUser,hidden } ) => (
    //this currentUser is from mapStateToProps(left side)
    //this hidden is from mapStateToProps(left side)
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={ () => auth.signOut() }>
                    SIGN OUT
                </div>
                : 
                <Link to='/signin' className='option'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : < CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
//the code below is a alternative of above code
//below we are not using reselect library
//but in above part we are using reselect library

//const mapStateToProps = (state) => ({
    ////state is root-reducer
    ////state.user is user key from root-reducer file,which will give the userReducer
    ////state.user.currentUser will give currentUser from userReducer file
    //currentUser: state.user.currentUser,
    ////currentUser on left side is a props that we are pass into this header component

    //hidden: state.cart.hidden
    ////here we are using hidden props(set from the mapDispatchToProps) to show the <CartDropdown /> component
//});
//mapStateToProps is used to get the props(payload) from redux that are set using mapDispatchToProps

//const mapStateToProps = ( { user: {currentUser}, cart: {hidden} } ) => ({ currentUser,hidden })
//alternative of the above  mapStateToProps

export default connect(mapStateToProps)(Header);

//when we click on {Logo},it will take us to the /home page
//when we click on {Shop},it will take us to the /shop page