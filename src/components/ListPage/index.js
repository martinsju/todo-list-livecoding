import React, { useState } from 'react'
import ListItem from '../ListItem/index.js'
import * as C from './styled.js'

function ListPage() {
	const [input, setInput] = useState('')
	const [list, setList] = useState([
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
	])

	function handleInput(e) {
		setInput(e.target.value)
	}

	function addListItem(e) {
		if (e.key === 'Enter' && input) {
			const newItem = {
				id: list.length + 1,
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
		const newList = list.filter((elem) => elem.id !== id)
		setList(newList)
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
			<C.Input
				placeholder='Type your next task'
				type='text'
				value={input}
				onChange={handleInput}
				onKeyDown={addListItem}
			/>
			{list.map((item) => (
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
