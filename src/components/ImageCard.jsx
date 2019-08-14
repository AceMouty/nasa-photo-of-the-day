import React from 'react';

function ImageCard (props) {
	return (
		<>
			<img src={props.image} alt=""/>
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
			<p>{props.date}</p>
		</>
	)
}

export default ImageCard