import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/header';
import Greating from './Components/Greating/greating';
import PostContainer from './Components/PostContainer/postContainer';
import Footer from './Components/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import PostDetails from './Components/PostDetails/postDetails';
import PostSearch from './Components/PostSearch/postsearch';
import ModalWindow from './Components/ModalWindow/mw';

function App() {

  const [modalActive, setModalActive] = useState<boolean>(false);
  
  return (
    <div className="App">
        <Routes>

          <Route path='/' element={
            <>
              <Header setModalActive={setModalActive}/>
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
        <ModalWindow modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  );
}

export default App;
