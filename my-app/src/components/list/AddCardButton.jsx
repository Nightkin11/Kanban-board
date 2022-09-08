import React from "react";
import styled from "styled-components";

const StyledAddCardButton = styled.button`
	border: none;
	padding: 0.1rem;
	cursor: pointer;
	color: #5E6C84;
&:hover {
	background-color: #9ca1a8;
	color: black;
}
`

const AddCardButton = (props) => {
	return (
		<StyledAddCardButton onClick={props.onClick} >+Add card</StyledAddCardButton>
	)
}

export default AddCardButton;