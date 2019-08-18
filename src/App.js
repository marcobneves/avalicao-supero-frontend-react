import React from 'react';

import Search from './components/bookSearch/search'
import List from './components/bookList/list'
import Details from './components/bookDetails/details'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <List />
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;
