import React from 'react';
import Global from './styles'

import Home from './pages/Home'
import Header from './components/Header';

import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Home />
      <Global />
    </DndProvider>
  );
}

export default App;
