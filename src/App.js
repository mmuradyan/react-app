import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Content from './Content'
import PostForm from './containers/PostForm'
import Books from './containers/Books'
import Test from './containers/Test'
import Age from './containers/Age'
import Counter from './containers/Counter'

function App() {
  return (
    <div className="App container">
      <Age />
      <Counter />
      <br /><br />
      <Test />
      <Books /> 
      <Content />
      <PostForm />
    </div>
  );
}

export default App;
