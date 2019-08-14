import React, {useState, useEffect} from "react";
import axios from 'axios';
import ImageCard from "./components/ImageCard";
import "./App.css";




// const data = {
// 	date: "2019-08-14",
// 	explanation: "What's that next to the Moon? Saturn. In its monthly trip around the Earth -- and hence Earth's sky -- our Moon passed nearly in front of Sun-orbiting Saturn earlier this week. Actually the Moon passed directly in front of Saturn from the viewpoints of a wide swath of Earth's Southern Hemisphere. The featured image from Sydney, Australia captured the pair a few minutes before the eclipse. The image was a single shot lasting only 1/500th of a second, later processed to better highlight both the Moon and Saturn. Since Saturn is nearly opposite the Sun, it can be seen nearly the entire night, starting at sunset, toward the south and east. The gibbous Moon was also nearly opposite the Sun, and so also visible nearly the entire night -- it will be full tomorrow night. The Moon will occult Saturn again during every lap it makes around the Earth this year.",
// 	hdurl: "https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_1280.jpg",
// 	media_type: "image",
// 	service_version: "v1",
// 	title: "Saturn Behind the Moon",
// 	url: "https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_960.jpg"
// 	}

function App() {
	
	// Comented out the Axios call so we dont max out endpoint hits 
	const [card, setCard] = useState();

	useEffect(() => {
		axios('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		.then(res => {
			console.log(res.data);
			const nasaData = res.data;
			setCard(nasaData)
		})
	}, []);

	// Creating state will returned data from endpoint without the use of an axios call
	// const [card] = useState(data)

	if (!card) {return <h3>Loading...</h3>}
  return (

    <div className="App">
     <ImageCard image={card.url} title={card.title} desc={card.explanation} date={card.date}/>
    </div>
  );
}

export default App;
