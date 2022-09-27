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
		console.log(input)
	}

	function addListItem(e) {
		if (e.key === 'Enter' && input) {
			const newItem = {
				id: list.length + 1,
				name: input,
				done: false
			}

			setList([...list, newItem])
		}
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
				<ListItem key={item.id} item={item} />
			))}
		</C.Container>
	)
}

export default ListPage
