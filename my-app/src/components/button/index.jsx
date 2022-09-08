import React from "react";
import styled from "styled-components";
import UserAvatar from './user-avatar.svg';

const StyledButton = styled.button`
	background-color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1px 6px;
	border-radius: 50%;
	border: none;
	margin-right: 8px;
	cursor: pointer;
`

const Button = () => {
	const handleClick = () => {
		console.log('ok')
	}
	return (
		<StyledButton onClick={handleClick}><img src={UserAvatar} alt="avatar" />
		</StyledButton>
	)
}

export default Button;