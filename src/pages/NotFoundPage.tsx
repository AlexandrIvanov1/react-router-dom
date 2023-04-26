import React from 'react';
import {Link} from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div>
            <h1>Page not found. Go <Link to="/" className={'not-found-page'}>Home</Link></h1>
        </div>
    )
}