import React from 'react';
import { Link } from 'react-router-dom';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/" >home</Link></li>
            
        </ul>
    </nav>
    );
};


export default sideDrawer;