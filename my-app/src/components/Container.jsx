import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	width: 1250px;
	margin: 0 auto;
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	align-items:  ${props => props.align || 'stretch'};
	justify-content:  ${props => props.justify || 'stretch'};
	color:  ${({color}) => color || 'black'};
`

const Container = (props) => {
	return <StyledContainer {...props} />
};

export default Container;