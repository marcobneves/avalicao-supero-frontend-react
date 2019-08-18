import React from 'react';

import Search from './components/bookSearch/search'
import List from './components/bookList/list'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <List />
      </div>
    </div>
  );
}

export default App;
