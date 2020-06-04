import React, { useState, useEffect, useRef } from 'react'

function Navbar(){
  
  // date to be held from the form
  const [userDate, setUserDate] = useState();

  // capture form
  const formRef = useRef();

  // set max date on initial render
  useEffect(() => {
    const datePicker = document.querySelector("input[type=date]")
    datePicker.max = new Date().toISOString().split("T")[0];
  })

  //set meida query to toggle form for lg screen sizes
  useEffect(() => {
    
    function checkScreen(windowObj) {
      
      if(windowObj.matches && formRef.current.classList.contains("hidden")){
        formRef.current.classList.remove("hidden")
      } else if (!windowObj.matches && !formRef.current.classList.contains("hidden")){
        formRef.current.classList.add("hidden")
      }
    }

    
    const windowObj = window.matchMedia("(min-width: 1024px)");
    //attatch at runtime
    checkScreen(windowObj);

    // Attach listener function on state changes
    windowObj.addListener(checkScreen);

    // cleanup
    return () => windowObj.removeListener(checkScreen);
  })

  function handleChange(e) {
    setUserDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userDate);
    
  }

  return (
    <nav className="bg-blue-600 flex justify-between items-center flex-wrap py-3 px-6">

      {/* Logo */}
      <div className="logo-container">
        <h2 className="text-white">NASA: Daily Feature</h2>
      </div>

      {/* Button */}
      <div className="lg:hidden relative" onClick={() => formRef.current.classList.toggle("hidden")}>
        <button className="flex items-center px-3 py-2 ml-8 border text-white rounded border-white focus:outline-none active:border-white hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      {/* Input field */}
      <div ref={formRef} className="flex justify-end w-full mt-3 lg:w-auto lg:mt-0 hidden">
        <form onSubmit={handleSubmit} className="relative bg-white px-2 rounded-md flex items-center item-">
          <span className="absolute top-1">
            <i className="fa fa-search"/>
          </span>
          <input type="date" required onChange={handleChange} className="w-40 pl-6 focus:outline-none"/>
          <input type="submit" className="hidden"/>
        </form>
      </div>
    </nav>
    // <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    //   <div class="flex items-center flex-shrink-0 text-white mr-6">
    //     <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    //   </div>
    //   <div class="block lg:hidden">
    //     <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
    //       <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    //     </button>
    //   </div>
    //   <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //     <div class="text-sm lg:flex-grow">
    //       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
    //         Docs
    //       </a>
    //       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
    //         Examples
    //       </a>
    //       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
    //         Blog
    //       </a>
    //     </div>
    //     <div>
    //       <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    //     </div>
    //   </div>
    // </nav>
  )
}
export default Navbar