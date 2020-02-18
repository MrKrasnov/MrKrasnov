import React from 'react';
import './sass/App.sass'
//connect component
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
