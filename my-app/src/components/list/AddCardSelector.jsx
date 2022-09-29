import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button2 from "./button2/Button2";


const StyledCardSelector = styled.select`
	background: #FFFFFF;
	border-radius: 10px;
	padding: 0.6rem;
	margin-bottom: 0.6rem;
	border: none;
	width: 100%;
`
const AddCardSelector = (props) => {
	const {setSelectorVisible, notify, moveTask} = props
	const [selected, setSelected] = useState(props.preListTasks[0])
	const handleChange = (e) => {
		setSelected(props.preListTasks[e.target.selectedIndex])
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		moveTask(selected.id, selected.status)
		setSelectorVisible(false)
		notify('Task is moved')
	}

	return (
		<form onSubmit={handleSubmit}>
			<StyledCardSelector onChange={handleChange}>
				{props.preListTasks.map(task => {
					return (
						<option key={task.id}>{task.title}</option>
					)
				})}
			</StyledCardSelector>
			<Button2 type='submit' text='Submit' />
		</form>
	)
}

export default AddCardSelector;