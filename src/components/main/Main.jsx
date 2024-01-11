import { Routes, Route } from "react-router-dom";
import TaskDetail from "../task-detail/TaskDetail";
import Board from "./Board";
import { ToastContainer, toast } from 'react-toastify';
import uniqid from 'uniqid';
import { LIST_TYPES } from "../../config";
import styled from "styled-components";

const StyledMain = styled.main`
	flex: 1 0 auto;
`

const Main = props => {

	const {tasks, setTasks} = props

	const notify = (notify) => {
		toast.info(notify, {
			position: "bottom-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			})
	};

	const addNewTask = (title) => {
		const newTask = {
			id: uniqid(),
			title: title,
			description: '',
			created: new Date().toISOString(),
			status: LIST_TYPES.BACKLOG,
		}
		setTasks([...tasks, newTask])
	}

	const moveTask = (id, status) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id && status === 'backlog') {
				return {...task, status: 'ready'}
			}
			if (task.id === id && status === 'ready') {
				return {...task, status: 'inProgress'}
			}
			if (task.id === id && status === 'inProgress') {
				return {...task, status: 'finished'}
			}
			return task
		})
		setTasks(updatedTasks)
	};

	const addNewDescription = (id, description) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				return {...task, description: description}
			}
			return task
		})
		setTasks(updatedTasks)
	};

	return (
		<StyledMain>
			<Routes>
				<Route exact path={'/'} element={<Board {...props} 
				addNewTask={addNewTask}
				moveTask={moveTask}
				notify={notify} 
				/>} />
				<Route path={'/tasks/:taskId'} element={<TaskDetail {...props} 
				addNewDescription={addNewDescription}
				notify={notify}
				/>} />
			</Routes>
			<ToastContainer 
				position="bottom-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</StyledMain>
	)
}

export default Main;