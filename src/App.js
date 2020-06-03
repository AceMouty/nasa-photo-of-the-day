import React from "react";
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="bg-blue-600 flex justify-center items-center flex-col md:justify-between md:items-center md:flex-row py-3 px-6">
        <Navbar/>
      </header>
      <main className="flex justify-center items-center flex-1">
        <Card/>      
      </main>
    </div>
  );
}

export default App;
