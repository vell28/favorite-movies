import React from 'react';
import type { ComponentType }   from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout:WrappedComponent = ({ children }) => (
    <div className='body-wrap'>
        <Header />
        <div className="content-wrap">
            <div className="container">
                {children}
            </div>
        </div>   
        <Footer />
    </div>
)

export default Layout;