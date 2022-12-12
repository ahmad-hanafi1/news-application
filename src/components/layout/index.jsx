import React from 'react';
import Sidebar from './sidebar';
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            { children }            
        </>
    )
}

export default Layout;