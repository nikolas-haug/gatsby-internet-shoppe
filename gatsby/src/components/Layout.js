import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

import '../styles/main.scss';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
                <div className="container-lg">
                        {children}
                </div>
            <Footer />
        </>
    )
}