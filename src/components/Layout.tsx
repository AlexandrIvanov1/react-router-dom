import React from 'react';
import {Outlet} from 'react-router-dom';
import {CustomLink} from './CustomLink';

export const Layout = () => {
    return (
        <>
            <header>
                <CustomLink path='/'>Home</CustomLink>
                <CustomLink path="/posts">Blog</CustomLink>
                <CustomLink path="/about">About</CustomLink>
            </header>
            <Outlet/>
        </>
    )
}