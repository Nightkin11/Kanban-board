import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	border: none;
	padding: 0.1rem;
	cursor: pointer;
	color: #5E6C84;
&:hover {
	background-color: #9ca1a8;
	color: black;
}
&:disabled {
	cursor: default;
	background-color: #11ffee00;
	color: #5E6C84;
}
`

const Button = (props) => {
	return (
		<StyledButton disabled={props.disabled} onClick={props.onClick} >{props.text}</StyledButton>
	)
}

export default Button;