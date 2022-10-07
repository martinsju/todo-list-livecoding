import React, { useEffect, useState } from 'react'
import ListItem from '../ListItem/index.js'
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

	function handleInput(e) {
		setInput(e.target.value)

		searchItems()
	}

	function searchItems() {
		if (input !== '') {
			const filteredData = list.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(input.toLowerCase())
			})
			setFilteredResults(filteredData)
		} else {
			setFilteredResults(list)
		}
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
		}
	}

	function clearInput() {
		setInput('')
	}

	function onDeleteItem(id) {
		//verify
		console.log('ta clicando')
		setModal({
			open: true,
			id: id
		})
	}

	function handleDeleteTrue() {
		//ver necessidade da verificação
		const newList = list.filter((elem) => elem.id !== modal.id)
		setList(newList)

		setModal({ open: false, id: null })
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
				<C.Input
					placeholder='Type your next task'
					type='text'
					value={input}
					onChange={handleInput}
					onKeyDown={validateKeyDown}
				/>
				<C.Button onClick={addListItem}>Add Task</C.Button>
			</C.AddArea>
			{!list.length && <C.Label>No items yet :(</C.Label>}
			{(input.length > 1 ? filteredResults : list).map((item) => (
				<ListItem
					key={item.id}
					item={item}
					onDelete={onDeleteItem}
					onToggle={onToggleDone}
				/>
			))}
		</C.Container>
	)
}

export default ListPage
