import React from 'react';
import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom';
import './App.scss'

const App = () => {
  return (
    <div className="Container">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
