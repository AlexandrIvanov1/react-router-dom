import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {PostType} from '../store/posts-reducer';

type BlogPagePropsType = {
    posts: Array<PostType>
}

export const BlogPage: React.FC<BlogPagePropsType> = ({posts}) => {

    console.log(useLocation())

    return (
        <div>
            <h1>Blog Page</h1>
            <Link to='/posts/new'>Add new post</Link>
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