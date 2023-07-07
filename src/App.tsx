import React from 'react';
import './App.scss';
import Header from './Components/Header/header';
import Greating from './Components/Greating/greating';
import PostContainer from './Components/PostContainer/postContainer';

function App() {
  return (
    <div className="App">
        <Header />
        <Greating />
        <PostContainer />
    </div>
  );
}

export default App;
