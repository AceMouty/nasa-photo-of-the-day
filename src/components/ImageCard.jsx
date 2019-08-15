import React from 'react';
import {ImageContainer, Image, TextContainer, Header, Description, Date} from './styles';

function ImageCard (props) {
	return (
		<>
			<ImageContainer>
				<Image src={props.image}/>
			</ImageContainer>	
			<TextContainer>
				<Header>{props.title}</Header>
				<Description>{props.desc}</Description>
				<	Date>{props.date}</Date>
			</TextContainer>
			
		</>
	)
}

export default ImageCard