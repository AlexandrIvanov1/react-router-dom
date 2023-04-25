import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {BlogPage} from './pages/BlogPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {Layout} from './components/Layout';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="posts" element={<BlogPage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;