import React from 'react';

export default Header = () =>(
    <nav className="teal lighten-3" role="navigation">
        <div className="nav-wrapper container "><a id="logo-container" href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="#">Login</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
    </nav>
);

