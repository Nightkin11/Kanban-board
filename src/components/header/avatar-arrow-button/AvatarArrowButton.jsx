import React from "react";
import styled from "styled-components";
import Arrow from './arrow.svg';

const ArrowWrapper = styled.img`
cursor: pointer;
transform: ${props => props.transform || 'none'};
`

const AvatarArrowButton = (props) => {
	return (
		<ArrowWrapper {...props} onClick={props.onClick} src={Arrow} alt="avatar" />
	)
}
export default AvatarArrowButton;