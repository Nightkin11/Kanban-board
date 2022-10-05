import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 1250px;
	margin: 0 auto;
	position: relative;
	width: ${props => props.width || 'auto'};
`

const Container = (props) => {
	return <StyledContainer {...props} />
};

export default Container;