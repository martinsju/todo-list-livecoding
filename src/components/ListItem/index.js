import React from 'react'
import * as C from './styled.js'
import { FaTimes } from 'react-icons/fa'

function ListItem({ item, onDelete, onToggle }) {
	return (
		<C.Item done={item.done}>
			<input type='checkbox' onClick={() => onToggle(item.id)} />
			<label>
				{item.name} - {`${item.done}`}
			</label>
			<FaTimes onClick={() => onDelete(item.id)} />
		</C.Item>
	)
}

export default ListItem
