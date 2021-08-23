import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
            <div className="container">

                <span className="navbar-brand pt-0">
                    <Link to="/" className="img-fluid logo-light text-custom"><FontAwesomeIcon icon={faArrowCircleLeft} /> Back</Link>
                </span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="mdi mdi-menu"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <AnchorLink className="nav-link" href="#description">Description</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#languages">Languages</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#images">Images</AnchorLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;