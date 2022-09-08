import React from "react";
import styled from "styled-components";

const StyledListWrapper = styled.div`
	width: 282px;
	background-color: #EBECF0;
	padding: 0.8rem;
	border-radius: 10px;
	margin: 0 auto;
*{
	font-size: 18px;
}
`

const StyledListTitle = styled.h2`
	margin-bottom: 16px;
`

const StyledTaskCard = styled.div`
	background: #FFFFFF;
	border-radius: 10px;
	padding: 0.6rem;
	margin-bottom: 0.6rem;
`

const ListWrapper = (props) => {
	return <StyledListWrapper {...props} />
};
const ListTitle = (props) => {
	return <StyledListTitle {...props} />
};
const TaskCard = (props) => {
	return <StyledTaskCard {...props} />
};

export {ListWrapper, ListTitle, TaskCard};