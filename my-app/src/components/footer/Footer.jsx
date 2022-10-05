import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Container from "../Container";

const FooterWrapper = styled.div`
width: 100%;
height: 55px;
background-color: #0067A3;
display: flex;
align-items: center;
flex: 0 0 auto;
*{
	color: #fff;
}
`
const AuthorWrapper = styled.div`
	display: flex;
	margin-right: 1rem;
@media (max-width: 1250px) {
	margin-right: 1rem;
}

@media (max-width: 768px) {
	display: none;
}
`

const TasksWrapper = styled.div`
	display: flex;
@media (max-width: 1250px) {
	margin-left: 1rem;
}
@media (max-width: 768px) {
	margin: 0 auto;
}
`

const Footer = (props) => {
	const {tasks} = props
	const ActiveTasks = () => {
		const listCount = tasks.filter(task => task.status === 'backlog')
		if (!listCount.length) return null;
		return (
			<Flex margin='0 36px 0 0'>
				Active tasks: {listCount.length}
			</Flex>
		)}
	const FinishedTasks = () => {
		const listCount = tasks.filter(task => task.status === 'finished')
		if (!listCount.length) return null;
		return (
			<Flex>
				Finished tasks: {listCount.length}
			</Flex>
		)}
	return (
		<FooterWrapper>
			<Container width='1250px'>
				<Flex justify='space-between'>
					<TasksWrapper>
						<ActiveTasks />
						<FinishedTasks />
					</TasksWrapper>
					<AuthorWrapper>
						Kanban board by Max Efimov, 2022
					</AuthorWrapper>
				</Flex>
			</Container>
		</FooterWrapper>
	)
}

export default Footer;