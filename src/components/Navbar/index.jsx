import React from 'react'

function Navbar(){
  return (
    <>
      <div className="logo-container">
        <h1>NASA: Daily Feature</h1>
      </div>
      <div className="relative bg-white px-2 rounded-md">
        <input type="text" placeholder="Search..." className="w-40 focus:outline-none"/>
        <button>
          <i className="fa fa-search left-auto"/>
        </button>
      </div>
    </>
  )
}

export default Navbar