import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Content from './Content'
import PostForm from './containers/PostForm'
import Books from './containers/Books'

function App() {
  return (
    <div className="App container">
      <Books /> 
      <Content />
      <PostForm />
    </div>
  );
}

export default App;
