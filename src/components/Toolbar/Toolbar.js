import React from 'react';
import { Link } from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo"><Link to="/" >LOGO</Link></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/about" >About!!!</Link></li>
                    <li><Link to="/" >Landing</Link></li>                    
                    <li><Link to="/projects" >Projects</Link></li>                    
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;