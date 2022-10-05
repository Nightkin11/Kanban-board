import React from "react";
import styled from "styled-components";
import AvatarButton from "./avatar-button/AvatarButton";
import AvatarArrowButton from "./avatar-arrow-button/AvatarArrowButton";
import Container from "../Container";
import { useState } from "react";
import Dropdown from "./Dropdown";
import useOnclickOutside from "react-cool-onclickoutside";
import Flex from "../Flex";


const StyledHeader = styled.header`
height: 55px;
background-color: #0067A3;
display: flex;
align-items: center;
`

const LogoWrapper = styled.a`
color: #FFFFFF;
font-size: 28px;
text-decoration: none;
margin-left: 1rem;

@media (max-width: 1250px) {
	margin-left: 1rem;
}
@media (max-width: 768px) {
	display: none;
}
`

const ProfileWrapper = styled.div`
	position: relative;
	display: flex;
	margin-left: auto;
@media (max-width: 1250px) {
	margin-right: 1rem;
}
`

const Header = (prop) => {
	const [toggleDropdown, setToggleDropdown] = useState(false);


	const handleToggle = (e) => {
		e.preventDefault();
		setToggleDropdown((prevState) => !prevState);
	};

	const closeToggleDropdown = () =>{
		setToggleDropdown(false)
	}

	const ref = useOnclickOutside(() => {
		closeToggleDropdown();
	});

	const rotate = () => {
		if (toggleDropdown) {
			return "rotate(180deg)"
		}
		return null
	}

	return (
		<StyledHeader>
			<Container width='1250px'>
				<Flex justify='space-between'>
					<LogoWrapper href='/'>{prop.logo}</LogoWrapper>
					<ProfileWrapper ref={ref} onClick={handleToggle} >
						<AvatarButton />
						<AvatarArrowButton transform={rotate()} />
						{toggleDropdown && <Dropdown onClick={closeToggleDropdown} />}
					</ProfileWrapper>
				</Flex>
			</Container>
		</StyledHeader>
	)
}



export default Header;