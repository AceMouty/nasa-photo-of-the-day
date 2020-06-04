import React from "react";
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex justify-center items-center flex-1">
        <Card/>      
      </main>
    </div>
  );
}

export default App;
