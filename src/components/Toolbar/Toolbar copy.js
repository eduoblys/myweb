import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo"><NavLink to="/" >Egidijus Duoblys</NavLink></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><NavLink to="about" >About Me</NavLink></li>
                    <li><NavLink to="/" >L</NavLink></li>                    
                    <li><NavLink to="/projects" >Projects</NavLink></li>                    
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;