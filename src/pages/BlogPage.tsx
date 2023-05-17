import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {PostType} from '../store/posts-reducer';
import {BlogFilter} from '../components/BlogFilter';

type BlogPagePropsType = {
    posts: Array<PostType>
}

export const BlogPage: React.FC<BlogPagePropsType> = () => {

    const [posts, setPosts] = useState<Array<PostType>>([])

    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <div>
            <h1>Blog Page</h1>

            <BlogFilter postQuery={postQuery} setSearchParams={setSearchParams}/>

            <Link to="/posts/new">Add new post</Link>
            {posts.filter(p => {
                return p.title.includes(postQuery)
            }).map(p => (
                    <Link key={p.id} to={`/posts/${p.id}`} className={'link'}>
                        <li>{p.title}</li>
                    </Link>
                )
            )}
        </div>
    )
}