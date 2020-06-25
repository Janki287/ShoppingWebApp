import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

const Header = ( { currentUser } ) => (
    //this currentUser if from mapStateToProps(left side)
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
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    //state is root-reducer
    //state.user is user key from root-reducer file,which will give the userReducer
    //state.user.currentUser will give currentUser from userReducer file
    currentUser: state.user.currentUser
    //currentUser on left side is a props that we are pass into this header component
});
//mapStateToProps is used to get the props(payload) from redux that are set using mapDispatchToProps

export default connect(mapStateToProps)(Header);

//when we click on {Logo},it will take us to the /home page
//when we click on {Shop},it will take us to the /shop page