import React from 'react';
import './sass/App.sass';
import './fonts/stylesheet.css'
//connect component
import Header from './components/Header';
import Main from './components/Main';
import Other from './components/Other';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Portfolio/>
      <Other/>
    </div>
  );
}

export default App;
