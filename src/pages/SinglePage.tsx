import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {PostType} from '../store/posts-reducer';

type SinglePagePropsType = {
    posts: Array<PostType>
}

export const SinglePage: React.FC<SinglePagePropsType> = ({posts}) => {

    const {id} = useParams()

    const navigate = useNavigate()

    const post = posts.find(p => {
        if (id) {
            return p.id === +id
        }
    })

    const goBack = () => navigate(-1)

    const goHome = () => navigate('/', {replace: true})

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`} className={'link'}>Edit this post</Link>
                </>)}
            <div>
                <button onClick={goBack} className={'button-back'}>Go back</button>
                <button onClick={goHome} className={'button-back'}>Go home</button>
            </div>
        </div>
    )
}