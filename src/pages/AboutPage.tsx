import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <li>
                    <Link style={{color: 'black', textDecoration: 'none'}} to={'contacts'}>Our contacts</Link>
                </li>
                <li>
                    <Link style={{color: 'black', textDecoration: 'none'}} to={'team'}>Our team</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}