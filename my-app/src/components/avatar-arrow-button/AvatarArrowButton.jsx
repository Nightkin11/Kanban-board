import React from "react";
import styled from "styled-components";
import Arrow from './arrow.svg';

const ArrowWrapper = styled.img`
cursor: pointer;
`

const AvatarArrowButton = () => {
	const handleClick = () => {
		console.log('ok')
	}
	return (
		<ArrowWrapper onClick={handleClick} src={Arrow} alt="avatar" />
	)
}

export default AvatarArrowButton;