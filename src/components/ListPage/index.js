import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Storage } from '../../services/storage.js'
import { Button } from '../Button/index.js'
import { Input } from '../Input/index.js'
import { ListItem } from '../ListItem/index.js'
import { Modal } from '../Modal/index.js'
import Toast from '../Toast/index.js'
import * as C from './styled.js'

export function ListPage() {
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
			return item.name.toLowerCase().includes(input.toLowerCase())
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

			const newList = [...list, newItem]
			setList(newList)
			Storage(newList, 'listKey').create()
			clearInput()
			notifyAdded()
		}
	}

	function clearInput() {
		setInput('')
	}

	function onDeleteItem(id) {
		console.log('id: ', id)
		setModal({
			open: true,
			id: id
		})
	}

	function handleDeleteTrue() {
		const newList = list.filter((elem) => elem.id !== modal.id)
		setList(newList)

		Storage(newList, 'listKey').delete()
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

	function renderItem(item) {
		return (
			<ListItem
				key={item.id}
				item={item}
				onDelete={onDeleteItem}
				onToggle={onToggleDone}
			/>
		)
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

			{!!input.length && filteredResults.map(renderItem)}

			{!input.length && list.map(renderItem)}

			<Toast />
		</C.Container>
	)
}
