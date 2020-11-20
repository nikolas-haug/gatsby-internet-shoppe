import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <div className="navbar-basic">
            <nav className="navbar-basic__container container-med">
                <Link to={'/'} className="navbar-basic__home-link">
                    <div className="navbar-basic__logo"></div>
            LOGO
        </Link>
                <button type="button" className="navbar-basic__toggle" aria-label="Open navigation menu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-basic__menu">
                    <ul className="navbar-basic__links">
                        <li className="navbar-basic__item"><Link className="navbar-basic__link" to={'/'}>Home</Link></li>
                        <li className="navbar-basic__item"><Link className="navbar-basic__link" to={'/about'}>About</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}