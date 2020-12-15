import React from 'react';
import './NavImage.scss';

export const NavImage = (props) => {
    return(
        <div>
        <img src={props.image} className={props.profile ? 'img' : null} />
        </div>
    )
}