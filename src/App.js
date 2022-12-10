import React from 'react';
import Pages from './Pages'
import Category from './components/Category/Category'
import Search from './components/Search/Search'
import { BrowserRouter } from 'react-router-dom';
import './App.scss'

const App = () => {
  return (
    <div className="Container">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
