import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
            <div className="container">

                <span className="navbar-brand pt-0 logo">
                    <h1 className="img-fluid logo-light">JT</h1>
                    <h1 className="img-fluid logo-dark text-dark">JT</h1>
                    {/* <img src="images/logo.png" alt="" className="img-fluid logo-light"/>
                    <img src="images/logo-dark.png" alt="" className="img-fluid logo-dark"/> */}
                </span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="mdi mdi-menu"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <AnchorLink className="nav-link" href="#home">Home</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#about">About</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#skills">Skills</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;