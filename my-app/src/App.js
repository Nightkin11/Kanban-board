import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #0079BF;
	display: flex;
	flex-direction: column;
	height: 100%;
`

function App() {
	const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
	const [tasks, setTasks] = useState(initialState)
	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
	return (
		<BrowserRouter>
			<AppWrapper>
				<Header logo='Awesome Kanban Board' />
				<Main tasks = {tasks} setTasks = {setTasks} />
				<Footer tasks={tasks} />
			</AppWrapper>
		</BrowserRouter>
  );
}

export default App;