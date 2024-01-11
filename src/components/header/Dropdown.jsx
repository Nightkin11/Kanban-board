import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
	position: absolute;
	top: 56px;
	left: -74px;
	z-index: 2;
`

const StyledDropdown = styled.div`
	position: relative;
	width: 134px;
	height: 60px;
	background-color: #FFF;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
:before {
	content: '';
	border: 12px solid transparent;
	border-bottom: 12px solid #FFF;
	position: absolute;
	left: 70%;
	margin-left: -12px;
	top: -24px;
	width: 0;
}
`

const StyledLi = styled.li`
	font-size: 14px;
	padding: 8px;
	list-style-type: none;
	cursor: pointer;
	border-radius: 5px;
:hover {
	background-color: #9ca1a8;
}
:first-child{
	padding-bottom: 4px;
}
:last-child {
	padding-top: 4px;
}
`

const Dropdown = () => {
	return (
		<Wrapper>
			<StyledDropdown>
				<StyledLi>Profile</StyledLi>
				<StyledLi>Log Out</StyledLi>
			</StyledDropdown>
		</Wrapper>
	)
}

export default Dropdown;