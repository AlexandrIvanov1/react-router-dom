import {createContext, useState} from 'react';

export  const AuthContext = createContext(null as any)

export const AuthProvider = ({children}: any) => {

    const [user, setUser] = useState('')

    const signIn = (user: any, cb: Function) => {
        setUser(user)
        cb()
    }

    const signOut = (cb: Function) => {
        cb()
        setUser('')
    }

    const value = {user, signIn, signOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}