import React from 'react';
import './App.scss';
import Header from './Components/Header/header';
import Greating from './Components/Greating/greating';
import PostContainer from './Components/PostContainer/postContainer';
import Footer from './Components/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import PostDetails from './Components/PostDetails/postDetails';
import PostSearch from './Components/PostSearch/postsearch';

function App() {
  return (
    <div className="App">
        <Routes>

          <Route path='/' element={
            <>
              <Header />
              <Greating />
              <PostContainer />
            </>
          } />
          <Route path='/search/:postId' element={
            <>
              {/* <PostDetails /> */}
              <PostSearch />
            </>
          } />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
