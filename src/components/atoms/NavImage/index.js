import React from 'react';
import './NavImage.scss';
import profile from '../../../assets/profile.jpg'


export const NavImage = (props) => {
    return(
        <div>
        <img src={props.image} className={props.profile ? 'img' : 'nav-content-image'} />
        </div>
    )
}