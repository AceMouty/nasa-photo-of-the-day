import React, { useState, useEffect } from 'react'

function Navbar(){
  
  // date to be held from the form
  const [userDate, setUserDate] = useState();

  // set max date on initial render
  useEffect(() => {
    const datePicker = document.querySelector("input[type=date]")
    datePicker.max = new Date().toISOString().split("T")[0];
  })

  function handleChange(e) {
    setUserDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userDate);
    
  }

  return (
    <>
      <div className="logo-container">
        <h1>NASA: Daily Feature</h1>
      </div>
      <form onSubmit={handleSubmit} className="relative bg-white px-2 rounded-md">
        <input type="date" required onChange={handleChange} className="w-40 focus:outline-none"/>
        <button type="submit">
          <i className="fa fa-search left-auto"/>
        </button>
      </form>
    </>
  )
}

export default Navbar