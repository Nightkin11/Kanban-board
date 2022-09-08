import React from "react";
import styled from "styled-components";
import Button from "../button";
import ArrowButton from "../arrow-button";
import Container from "../Container";

const HeaderWrapper = styled.div`
height: 55px;
background-color: #0067A3;
display: flex;
align-items: center;
`

const LogoWrapper = styled.a`
color: #FFFFFF;
font-size: 28px;
text-decoration: none;
`

const ProfileWrapper = styled.div`
display: flex;
margin-left: auto;
`

const Header = (prop) => {
	return (
		<HeaderWrapper>
			<Container>
				<LogoWrapper href='/'>{prop.logo}</LogoWrapper>
				<ProfileWrapper>
					<Button />
					<ArrowButton />
				</ProfileWrapper>
			</Container>
		</HeaderWrapper>
	)
}



export default Header;