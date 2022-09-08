import React from "react";
import { useState, useRef, useEffect } from "react";
import AddCardButton from "./AddCardButton";
import {ListWrapper, ListTitle, TaskCard} from "./ListWrapper";
import {LIST_TYPES, LIST_COLORS } from "../../config";
import AddCardForm from "./AddCardForm";

const List = props => {
	const {title, type, tasks, addNewTask} = props;
	const [isFormVisible, setFormVisible] = useState(false)
	const inputRef = useRef(null)

	const handleClick = () => {
		setFormVisible(!isFormVisible)
	}


	useEffect(()=>{
		if (isFormVisible){
			inputRef.current.focus()
		}});

	return (
		<ListWrapper>
			<ListTitle>{title}</ListTitle>
			{tasks.map(task => {
				return (
					<TaskCard key = {task.id} style={{background: LIST_COLORS[type]}} >{task.title}</TaskCard>
				)
			})}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<>
				<AddCardForm ref={inputRef} addNewTask={addNewTask}/>
				</>

				)}
			{type === LIST_TYPES.BACKLOG && !isFormVisible &&(
				<AddCardButton onClick={handleClick} />
			)}
		</ListWrapper>
	)
}

export default List;