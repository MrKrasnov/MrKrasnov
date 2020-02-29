import React from 'react';
import './sass/App.sass';
import './fonts/stylesheet.css'
//connect component
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Other from './components/Other/Other';
import Portfolio from './components/Portfolio/Portfolio';
// import Test from './components/Test/Test';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      {/* <Test/> */}
      <Portfolio/>
      <Other/>
    </div>
  );
}

export default App;
