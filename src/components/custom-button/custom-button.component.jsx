import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ( { children,isGoogleSignIn,inverted,...otherButtonProps } ) => (
    <button 
        className={ ` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ` } 
        {...otherButtonProps}>
            {children}
    </button>
)

export default CustomButton;
//we are getting Sign In text as a {children} props
//and type=submit as a otherButtonProps