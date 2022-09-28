import { useState } from "react";
import React from "react";
import styled from "styled-components";
import Button2 from "../button2/Button2";

const StyledCardInput = styled.input`
	background: #FFFFFF;
	border-radius: 10px;
	padding: 0.6rem;
	margin-bottom: 0.6rem;
	border: none;
	width: 100%;
`

const AddCardForm = React.forwardRef((props, ref) => {
	const {addNewTask, setFormVisible, notify, notify2} = props
	const [values, setValues] = useState({
		title: '',
		placeholder: 'Enter task',
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.title){
			addNewTask(values.title)
			setFormVisible(false)
			notify("Task is added")
		} 
		if (values.title === '') {
			setFormVisible(false)
			notify("Task is not added. Field is required")
			notify2("Task is not added. Field is required")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<StyledCardInput id='taskTitle' name='title' type='text' placeholder={values.placeholder} ref={ref} value={values.title} onChange={handleChange} />
			<Button2 type='submit' text='Submit' />
		</form>
	)
})

export default AddCardForm;