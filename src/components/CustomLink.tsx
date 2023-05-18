import React, {ReactNode} from 'react';
import {Link, useMatch} from 'react-router-dom';

type CustomLinkPropsType = {
    children: ReactNode
    path: string
}

export const CustomLink: React.FC<CustomLinkPropsType> = ({children, path, ...props}) => {

    const match = useMatch({path: path, end: path.length === 1})

    return (
        <Link
            to={path}
            style={{color: match ? 'dodgerblue' : 'black'}}
            {...props}
        >
            {children}
        </Link>
    )
}