import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiOutlinePlus } from 'react-icons/ai'
import ListItem from '../ListItem/index.js'
import Button from '../Button/index.js'
import Input from '../Input/index.js'
import Modal from '../Modal/index.js'
import * as C from './styled.js'

function ListPage() {
	const [input, setInput] = useState('')
	const [filteredResults, setFilteredResults] = useState([])
	const [modal, setModal] = useState({
		open: false,
		id: null
	})
	const [list, setList] = useState(
		JSON.parse(localStorage.getItem('listKey')) || [
			{
				id: 1,
				name: 'Study React',
				done: false
			},
			{
				id: 2,
				name: 'Hang out with my friends',
				done: false
			}
		]
	)

	useEffect(() => {
		localStorage.setItem('listKey', JSON.stringify(list))
	}, [list])

	useEffect(() => {
		searchItems()
	}, [input])

	function notifyAdded() {
		toast.success('Task added', {})
	}

	function notifyDeleted() {
		toast.error('Task deleted', {})
	}

	function handleInput(e) {
		setInput(e.target.value)
	}

	function searchItems() {
		const filteredData = list.filter((item) => {
			return item.name.includes(input)
		})
		setFilteredResults(filteredData)
	}

	function validateKeyDown(e) {
		if (e.key === 'Enter') {
			addListItem()
		}
	}

	function addListItem() {
		if (input) {
			const lastID = list[list.length - 1]?.id ?? 0

			const newItem = {
				id: lastID + 1,
				name: input,
				done: false
			}
			setList([...list, newItem])
			clearInput()
			notifyAdded()
		}
	}

	function clearInput() {
		setInput('')
	}

	function onDeleteItem(id) {
		setModal({
			open: true,
			id: id
		})
	}

	function handleDeleteTrue() {
		const newList = list.filter((elem) => elem.id !== modal.id)
		setList(newList)

		setModal({ open: false, id: null })
		notifyDeleted()
	}

	function handleDeleteFalse() {
		setModal({ open: false, id: null })
	}

	function onToggleDone(id) {
		const newList = list.map((elem) => {
			if (elem.id === id) {
				return { ...elem, done: !elem.done }
			}
			return elem
		})
		setList(newList)
	}

	return (
		<C.Container>
			{modal.open && (
				<Modal
					handleDeleteTrue={handleDeleteTrue}
					handleDeleteFalse={handleDeleteFalse}
				/>
			)}
			<C.AddArea>
				<Input
					onChange={handleInput}
					onKeyDown={validateKeyDown}
					placeholder='Type your next text'
					value={input}
				/>

				<Button onClick={addListItem}>
					<AiOutlinePlus />
					Add Task
				</Button>
			</C.AddArea>

			{!list.length && <C.Label>No items yet :(</C.Label>}

			{(input.length > 0 ? filteredResults : list).map((item) => (
				<ListItem
					key={item.id}
					item={item}
					onDelete={onDeleteItem}
					onToggle={onToggleDone}
				/>
			))}
			<C.StyledToast
				autoClose={5000}
				newestOnTop={true}
				closeOnClick
				theme='colored'
			/>
		</C.Container>
	)
}

export default ListPage
