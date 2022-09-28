import React from "react";
import styled from "styled-components";
import { LIST_TYPES, LIST_TITLES } from "../../config";
import List from "../list/List";
import 'react-toastify/dist/ReactToastify.css';


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
	const {tasks, addNewTask, moveTask, notify} = props


	const backlogTasks = tasks.filter(task => task.status ==='backlog')
	const readyTasks = tasks.filter(task => task.status ==='ready')
	const inProgressTasks = tasks.filter(task => task.status ==='inProgress')
	const finishedTasks = tasks.filter(task => task.status ==='finished')

	return (
		<Container >
			{Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List key={type} type={type} 
					title={LIST_TITLES[type]}
					backlogTasks={backlogTasks}
					readyTasks={readyTasks} 
					inProgressTasks={inProgressTasks}
					finishedTasks={finishedTasks}
					tasks={listTasks} 
					addNewTask={addNewTask} 
					moveTask={moveTask}
					notify={notify} />
				)
			})}
		</Container>
	)
}

export default Board;