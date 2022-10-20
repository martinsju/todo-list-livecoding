import React from 'react'
import * as C from './styled.js'
import Checkbox from '../Checkbox/index.js'
import { FaTimes } from 'react-icons/fa'

function ListItem({ item, onDelete, onToggle }) {
	return (
		<C.ListItem>
			<Checkbox item={item} onToggle={onToggle} />
			<C.Label done={item.done}>{item.name}</C.Label>
			<FaTimes onClick={() => onDelete(item.id)} />
		</C.ListItem>
	)
}

export default ListItem
