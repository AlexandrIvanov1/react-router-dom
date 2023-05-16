import React from 'react';
import {useAuth} from '../hook/useAuth';
import {useNavigate} from 'react-router-dom';

export const CreatePost = () => {

    const {signOut} = useAuth()

    const navigate = useNavigate()

    return (
        <div>
            <h1>Create post</h1>
            <input type="text" placeholder={'Enter the title of post'}/>
            <div>
                <button>Add post</button>
            </div>


            <button onClick={() => signOut(() => navigate('/'))}>Log Out</button>


        </div>
    )
}