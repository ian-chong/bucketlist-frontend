import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to ='/'>Home|</NavLink>
            <NavLink to ='new'>SignUp|</NavLink>
            <NavLink to ='in'>SignIn</NavLink>
        </div>
    )
}

export default Navigation;