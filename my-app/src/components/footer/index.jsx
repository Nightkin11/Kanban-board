import React from "react";
import styled from "styled-components";
import Flex from "../flex";
import Container from "../Container";

const FooterWrapper = styled.div`
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 55px;
background-color: #0067A3;
display: flex;
align-items: center;
*{
	color: #fff;
}
`

const Footer = () => {
	return (
		<FooterWrapper>
			<Container justify='space-between'>
				<Flex>
					<Flex margin='0 36px 0 0'>
						Active tasks: #
					</Flex>
					<Flex>
						Finished tasks: #
					</Flex>
				</Flex>
				<Flex>
					Kanban board by Max Efimov, 2022
				</Flex>
			</Container>
		</FooterWrapper>
	)
}

export default Footer;