import React from 'react';

export const CreatePost = () => {
    return (
        <div>
            <h1>Create post</h1>
            <input type="text" placeholder={'Enter the title of post'}/>
            <div>
                <button>Add post</button>
            </div>
        </div>
    )
}