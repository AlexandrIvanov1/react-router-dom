import React from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {BlogPage} from './pages/BlogPage';
import {NotFoundPage} from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/notFound">Not found</Link>
      </header>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/posts' element={<BlogPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default App;