import React from 'react'
import * as C from './styled.js'

export function Checkbox({ item, onToggle }) {
	function handleChange() {
		onToggle(item.id)
	}

	return (
		<C.Checkbox type='checkbox' onChange={handleChange} checked={item.done} />
	)
}
