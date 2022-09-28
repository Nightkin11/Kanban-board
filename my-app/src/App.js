import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main/Main';
import Footer from './components/footer';
import styled from 'styled-components';
import { useState } from 'react';
import data from './mock';

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #0079BF;
	display: flex;
	flex-direction: column;
	height: 100%;
`

function App() {
	const [tasks, setTasks] = useState(data)
	return (
		<BrowserRouter>
			<AppWrapper>
				<Header logo='Awesome Kanban Board' />
				<Main tasks = {tasks} setTasks = {setTasks} />
				<Footer />
			</AppWrapper>
		</BrowserRouter>
  );
}

export default App;