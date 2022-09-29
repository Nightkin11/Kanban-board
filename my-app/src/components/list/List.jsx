import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Button from "./button/Button";
import {ListWrapper, ListTitle, TaskCard} from "./ListWrapper";
import {LIST_TYPES, LIST_COLORS } from "../../config";
import AddCardForm from "./AddCardForm";
import Notify2 from "./Notify";
import AddCardSelector from "./AddCardSelector";

const List = props => {
	const {title, type, tasks, addNewTask, notify, backlogTasks, readyTasks, inProgressTasks, moveTask} = props;
	const [isFormVisible, setFormVisible] = useState(false)
	const [isSelectorVisible, setSelectorVisible] = useState(false)
	const [notify2, setNotify] = useState('')
	const inputRef = useRef(null)

	const handleClickForm = () => {
		setFormVisible(!isFormVisible)
		setNotify('')
	}

	const handleClickSelector = () => {
		setSelectorVisible(!isSelectorVisible)
	}

	useEffect(()=>{
		if (isFormVisible){
			inputRef.current.focus()
		}});

	const handleNotify = (notify2) => {
		setNotify(notify2)
	}

	const isBtnDisabled1 = backlogTasks.length === 0
	const isBtnDisabled2 = readyTasks.length === 0
	const isBtnDisabled3 = inProgressTasks.length === 0
	
	return (
		<ListWrapper>
			<ListTitle>{title}</ListTitle>
			{tasks.map(task => {
				return (
					<Link key = {task.id} to={`/tasks/${task.id}`} style={{ textDecoration: 'none', color: 'black' }} >
						<TaskCard key = {task.id} style={{background: LIST_COLORS[type]}} >{task.title}</TaskCard>
					</Link>
				)
			})}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<AddCardForm ref={inputRef} addNewTask={addNewTask} setFormVisible={setFormVisible} notify={notify} notify2={handleNotify} />
				)}
			{type === LIST_TYPES.BACKLOG && !isFormVisible &&(
				<Notify2 notify2={notify2} />
			)}
			{type === LIST_TYPES.BACKLOG && !isFormVisible &&(
				<Button onClick={handleClickForm} text='+Add task' />
			)}
			{type === LIST_TYPES.READY && isSelectorVisible && (
				<AddCardSelector preListTasks={backlogTasks} moveTask={moveTask} setSelectorVisible={setSelectorVisible} notify={notify} />
			)}
			{type === LIST_TYPES.READY && !isSelectorVisible &&(
				<Button onClick={handleClickSelector} disabled={isBtnDisabled1} text='+Add task' />
			)}
			{type === LIST_TYPES.IN_PROGRESS && isSelectorVisible && (
				<AddCardSelector preListTasks={readyTasks} moveTask={moveTask} setSelectorVisible={setSelectorVisible} notify={notify} />
			)}
			{type === LIST_TYPES.IN_PROGRESS && !isSelectorVisible &&(
				<Button onClick={handleClickSelector} disabled={isBtnDisabled2} text='+Add task' />
			)}
			{type === LIST_TYPES.FINISHED && isSelectorVisible && (
				<AddCardSelector preListTasks={inProgressTasks} moveTask={moveTask} setSelectorVisible={setSelectorVisible} notify={notify} />
			)}
			{type === LIST_TYPES.FINISHED && !isSelectorVisible &&(
				<Button onClick={handleClickSelector} disabled={isBtnDisabled3} text='+Add task' />
			)}
		</ListWrapper>
	)
}

export default List;