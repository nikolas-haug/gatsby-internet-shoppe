import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={isOpen ? 'navbar-basic opened' : 'navbar-basic'}>
            <nav className="navbar-basic__container container-med">
                <Link to={'/'} className="navbar-basic__home-link">
                    <div className="navbar-basic__logo"></div>
            LOGO
        </Link>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="navbar-basic__toggle" aria-label="Open navigation menu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-basic__menu">
                    <ul className="navbar-basic__links">
                        <li className="navbar-basic__item"><Link className="navbar-basic__link" onClick={() => setIsOpen(false)} to={'/'}>Home</Link></li>
                        <li className="navbar-basic__item"><Link className="navbar-basic__link" onClick={() => setIsOpen(false)} to={'/about'}>About</Link></li>
                        <div className="Header__summary snipcart-summary snipcart-checkout">
                            <div className="Header__summary__title">
                                🛍 MY CART 🛍
                            </div>
                            <div className="Header__summary__line">
                                Number of items: <span className="snipcart-total-items"></span>
                            </div>
                            <div className="Header__summary__line">
                                Total price: <span className="snipcart-total-price"></span>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}