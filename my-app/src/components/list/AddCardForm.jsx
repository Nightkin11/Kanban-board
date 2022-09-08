import { useState } from "react";
import React from "react";
import styled from "styled-components";

const StyledCardInput = styled.input`
	background: #FFFFFF;
	border-radius: 10px;
	padding: 0.6rem;
	margin-bottom: 0.6rem;
	border: none;
	width: 100%;
`

const StyledCardInputButton = styled.button`
	background-color: #0079BF;
	color: #FFF;
	width: 102px;
	height: 28px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

const AddCardForm = React.forwardRef((props, ref) => {
	const {addNewTask} = props
	const [values, setValues] = useState({
		title: ''
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.title){
			addNewTask(values.title)
		}
		//TODO: обработать пустое значение title
	}

	return (
		<form onSubmit={handleSubmit}>
			<StyledCardInput id='taskTitle' name='title' type='text' placeholder="Enter task" ref={ref} value={values.title} onChange={handleChange} />
			<StyledCardInputButton type='submit'>Submit</StyledCardInputButton>
		</form>
	)
})

export default AddCardForm;