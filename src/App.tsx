import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {BlogPage} from './pages/BlogPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {Layout} from './components/Layout';
import {SinglePage} from './pages/SinglePage';
import {CreatePost} from './pages/CreatePost';
import {EditPost} from './pages/EditPost';
import {changePostTitleAC, PostType} from './store/posts-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store/store';
import {Login} from './pages/Login';
import {RequireAuth} from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';

function App() {

    const posts = useSelector<AppRootStateType, Array<PostType>>(state => state.posts)

    const dispatch = useDispatch()

    const changePostTitle = (postId: number, title: string) => {
        dispatch(changePostTitleAC(postId, title))
    }

    return (
        <AuthProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="posts" element={<BlogPage posts={posts}/>}/>
                        <Route path="posts/:id" element={<SinglePage posts={posts}/>}/>
                        <Route path="posts/:id/edit"
                               element={<EditPost posts={posts} changePostTitle={changePostTitle}/>}/>
                        <Route path="about" element={<AboutPage/>}/>

                        <Route path="posts/new" element={
                            <RequireAuth>
                                <CreatePost/>
                            </RequireAuth>}
                        />

                        <Route path="about-us" element={<Navigate to={'/about'} replace/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    )
}

export default App;