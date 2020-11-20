import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

import '../styles/main.scss';

export default function Layout({ children }) {
    return (
        <div className="container-med">
            <Nav />
                {children}
            <Footer />
        </div>
    )
}