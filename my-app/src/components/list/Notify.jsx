import React from "react";
import styled from "styled-components";

const StyledNotify2 = styled.p`
	color: red;
	font-size: 14px;
`

const Notify2 = (props) => {
	return <StyledNotify2 {...props} >{props.notify2}</StyledNotify2>
};

export default Notify2;