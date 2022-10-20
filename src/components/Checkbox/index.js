import React from 'react'
import * as C from './styled.js'

function Checkbox({ item, onToggle }) {
	return (
		<C.Input
			type='checkbox'
			onChange={() => onToggle(item.id)}
			checked={item.done}
		/>
	)
}

export default Checkbox
