import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../hook/useAuth';

export const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const {signIn} = useAuth()

    const fromPage = location.state.from.pathname || '/'

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const user = e.target.userName.value

        signIn(user, () => navigate(fromPage, {replace: true}))
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name='userName'/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}