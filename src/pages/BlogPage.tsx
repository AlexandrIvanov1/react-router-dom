import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {PostType} from '../App';

export const BlogPage = () => {

    const [posts, setPosts] = useState<Array<PostType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <div>
            <h1>Blog Page</h1>
            {posts.map(p => {
                return (
                        <Link key={p.id} to={`/posts/${p.id}`} className={'link'}>
                            <li>{p.title}</li>
                        </Link>
                )
            })}
        </div>
    )
}