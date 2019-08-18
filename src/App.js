import React from 'react';

import Search from './components/bookSearch/search'
import List from './components/bookList/list'
import Details from './components/bookDetails/details'

function App() {
  return (
    <div className="App">
      <Search/>
      <List/>
      <Details/>
    </div>
  );
}

export default App;
