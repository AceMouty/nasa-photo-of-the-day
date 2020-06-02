import React from "react";
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 flex justify-center items-center flex-col md:justify-between md:items-center md:flex-row py-3 px-6">
        <Navbar/>
      </header>
      <Card/>      
    </div>
  );
}

export default App;
