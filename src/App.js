import React from 'react';
const api = {
  key:"b8c4a536e6114bdd4a1d4624750599e6",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type ="text" 
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
