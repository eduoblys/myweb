import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo">Egidijus Duoblys</div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>                    
                    <li><NavLink to="about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Me</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink></li>                    
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;