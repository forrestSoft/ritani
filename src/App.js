import React from 'react';

import Search from './components/Search'
import DisplayResults from './components/DisplayResults'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Ritani interview assesment</header>
      <section>
        <Search />
        <DisplayResults />
      </section>
    </div>
  );
}

export default App;
