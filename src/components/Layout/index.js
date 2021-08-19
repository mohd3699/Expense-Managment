import React from 'react'
import Header from '../Header';

function Layout(props) {
    const { children } = props;

    return (
        <div>
            <Header />


            {children}
        </div>
    )
}

export default Layout