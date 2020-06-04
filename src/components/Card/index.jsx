import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MockRequest from '../../util/MockRequest'

function Card(){
  
  // state to hold nasa data
  const [cardData, setCardData] = useState();
  
  // make call to api on load, use dummy data for dev
  useEffect(() => {

    /*
      axios(`https://api.nasa.gov/planetary/apod?api_key=REACT_APP_NASA_KEY`)
      .then(res => setCardData(res.data))
      .catch(err => console.log(err))
      

      //make more than one axios req.
      const requests = [];

      const call1 = axios('https://api.nasa.gov/planetary/apod?api_key=REACT_APP_NASA_KEY');
      requests.pust(call1);

      for(let i = 1; i < 6; i++){

        // build todays date
        const today = new Date() - i;
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = String(today.getFullYear());
        const date = yyyy + '/' + mm + '/' + dd;

        push(axios.get(`https://api.nasa.gov/planetary/apod?api_key=REACT_APP_NASA_KEY&date=`);)
      }

      axios.all(requests)
      .then(res => console.log(res));

    */

    
    MockRequest(true, 300)
    .then(res => setCardData(res))
    .catch(err => console.log(err))
  })

  if(!cardData){
    return <h1>Loading...</h1>
  }

  return(
    
    <div className="bg-white mx-auto my-5 p-5 rounded-md sm:w-8/12 md:w-8/12 lg:w-8/12 w-10/12 bg-purple-300">
      <div className="relative w-40 h-40 md:w-64 md:h-64 mx-auto mb-5 ">
        <img src={cardData.url} alt="Image from Nasa" className="absolute top-0 h-full w-full rounded-md"/>
      </div>
      <div className="">
        <h2 className="text-center mb-5">{cardData.title}</h2>
        <p>{cardData.explanation}</p>
      </div>
    </div>
    
  )
}

export default Card