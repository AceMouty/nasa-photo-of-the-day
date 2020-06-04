import React, { useState, useEffect, useRef } from 'react'

function Navbar(){
  
  // date to be held from the form
  const [userDate, setUserDate] = useState();

  function handleChange(e) {
    setUserDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userDate);
    
  }

  return (
    <nav className="bg-blue-600 flex  justify-center md:justify-between items-center flex-wrap py-3 px-6">

      {/* Logo */}
      <div className="logo-container">
        <h2 className="text-white">NASA: Daily Feature</h2>
      </div>

      {/* Input field */}
      <div className="flex w-full justify-center md:justify-start mt-3 md:w-auto md:mt-0">
        <form onSubmit={handleSubmit} className="relative bg-white px-2 rounded-md flex items-center item-">
          <span className="absolute top-1">
            <i className="fa fa-search"/>
          </span>
          <input type="text" required onChange={handleChange} className="w-40 pl-6 focus:outline-none"/>
          <input type="submit" className="hidden"/>
        </form>
      </div>
    </nav>
    
  )
}
export default Navbar