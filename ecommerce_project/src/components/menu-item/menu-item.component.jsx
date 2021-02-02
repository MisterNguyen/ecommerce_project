import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={
        {backgroundImage: `url(${imageUrl})`}
        }/>
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">
                Shop Now!
            </span>
        </div>
    </div>
);
//we wrap menu item with withRouter, so now it has access to history, location, etc props
export default withRouter(MenuItem);