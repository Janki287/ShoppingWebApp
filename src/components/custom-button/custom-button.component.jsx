import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ( { children,...otherButtonProps } ) => (
    <button className='custom-button' {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;
//we are getting Sign In text as a {children} props
//and type=submit as a otherButtonProps