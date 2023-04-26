import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {PostType} from '../App';

export const SinglePage = () => {

    const {id} = useParams()

    const [post, setPost] = useState<PostType>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [id])

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>)}
        </div>
    )
}