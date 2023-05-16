import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {PostType} from '../store/posts-reducer';

type EditPostPropsType = {
    posts: Array<PostType>
    changePostTitle: (postId: number, title: string) => void
}

export const EditPost: React.FC<EditPostPropsType> = ({posts, changePostTitle}) => {

    const {id} = useParams()

    const [editMode, setEditMode] = useState(false)

    const post = posts.find(p => {
        if (id) {
            return p.id === +id
        }
    })

    if (!post) {
        return <Navigate to={'/'}/>
    }

    const turnOffEditMode = () => setEditMode(false)

    const turnOnEditMode = () => setEditMode(true)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            turnOffEditMode()
        }
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => changePostTitle(post.id, e.currentTarget.value)

    return (
        <div>
            <h1>Edit post {id}</h1>
            {editMode
                ? <input
                    type="text"
                    value={post.title}
                    onBlur={turnOffEditMode}
                    className={'edit-input'}
                    autoFocus
                    onChange={onChangePostHandler}
                    onKeyDown={onKeyPressHandler}
                />
                : <p onDoubleClick={turnOnEditMode}>{post.title}</p>
            }
        </div>
    )
}