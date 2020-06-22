import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ( { title,imageUrl,size,linkUrl,history,match } ) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
        className='background-image' 
        style= {{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
//string interpolation (``) is javascript feature so we have to use it in a {} brackets
//$match.url means we don't know at what link we are currently on, so it will take current url and concatenate the $linkUrl with it
//example: current url- localhost:3000 and linkUrl- hats
//final url: localhost:3000/hats