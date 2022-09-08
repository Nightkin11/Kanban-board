import uniqid from 'uniqid';
import React from "react";
import styled from "styled-components";
import { LIST_TYPES, LIST_TITLES } from "../../config";
import List from "../list/List";


const Container = styled.div`
	max-width: 1250px;
	margin: 0 auto;
	padding: 2rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(282px,1fr));
	grid-template-rows: auto;
	grid-gap: 2vw;
`


const Board = props => {
	const {tasks, setTasks} = props

	const addNewTask = (title) => {
		const newTask = {
			id: uniqid(),
			title: title,
			description: '',
			created: new Date().toISOString(),
			status: LIST_TYPES.BACKLOG,
		}
		setTasks([...tasks], newTask)
	}

	return (
		<Container >
			{Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List key={type} type={type} title={LIST_TITLES[type]} tasks={listTasks} addNewTask={addNewTask} />
				)
			})}
		</Container>

	)
}



export default Board;