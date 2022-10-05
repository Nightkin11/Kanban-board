import React from 'react'
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import Flex from "../Flex";
import {LIST_TITLES, LIST_COLORS } from "../../config";
import Close from './close.svg';
import { formatDate } from "../../utils";
import TaskDescription from "./TaskDescription";
import { Link } from 'react-router-dom';
import Container from '../Container';


const StyledTaskDetail = styled.div`
	background-color: #EBECF0;
	border-radius: 5px;
	padding: 1rem 1rem;
	margin: 2rem 0 2rem 0;
@media (max-width: 1250px) {
	margin: 2rem 1rem 2rem 1rem;
}
`

const TaskTitle = styled.h2`
	font-size: 24px;
`
const TaskStatus = styled.div`
	background-color: ${props => props.color || 'gray'};
	width: 102px;
	height: 28px;
	border: none;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	display: none;
`

const TaskClose = styled.img`
	cursor: pointer;
`

const TaskCreated = styled.p`
	font-size: 14px;
	color: gray;
	display: none;
`


const TaskDetail = (props) => {
	const {tasks, addNewDescription, notify} = props
	const {taskId} = useParams()
	const task = tasks.find(task => task.id === taskId )

	const [description, setDescription] = React.useState(task.description)
	
	const handleChange = (e) => {
		setDescription(e.target.value)
	};

	const handleSave = () => {
		addNewDescription(taskId, description)
		notify('Description saved')
	};


	return (
		<Container>
			<StyledTaskDetail>
				<Flex align='center' justify='space-between'>
					<Flex align='center' justify='space-between' style={{width: '300px'}}>
						<TaskTitle>{task.title}</TaskTitle>
						<TaskStatus color={LIST_COLORS[task.status]}>{LIST_TITLES[task.status]}</TaskStatus>
					</Flex>
					<Link to={'/'}><TaskClose src={Close} /></Link>
				</Flex>
				<Flex>
					<TaskCreated>{formatDate(task.created)}</TaskCreated>
				</Flex>
				<Flex direction='column'>
					<TaskDescription value={description} onChange={handleChange} onSave={handleSave} />
				</Flex>
			</StyledTaskDetail>
		</Container>
		)

};

export default TaskDetail;