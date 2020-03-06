import React from 'react';
import Global from './styles'

import Home from './pages/Home'
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Global />
    </>
  );
}

export default App;
