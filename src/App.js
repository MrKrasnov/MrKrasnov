import React from 'react';
import './sass/App.sass';
import './fonts/stylesheet.css'
//connect component
import Header from './components/Header';
import Main from './components/Main';
import Other from './components/Other';
import Portfolio from './components/Portfolio/Portfolio';
import Test from './components/Test';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Test/>
      <Portfolio/>
      <Other/>
    </div>
  );
}

export default App;
