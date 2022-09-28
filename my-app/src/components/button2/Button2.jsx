import React from "react";
import styled from "styled-components";

const StyledButton2 = styled.button`
	font-size: 18px;
	background-color: #0079BF;
	color: #FFF;
	width: 102px;
	height: 28px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

const Button2 = (props) => {
	return (
		<StyledButton2 onClick={props.onClick} >{props.text}</StyledButton2>
	)
}

export default Button2;