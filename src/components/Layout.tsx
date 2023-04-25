import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/posts">Blog</Link>
                <Link to="/about">About</Link>
            </header>
            <Outlet/>
        </>
    )
}