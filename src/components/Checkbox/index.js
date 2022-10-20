import React from 'react'
import * as C from './styled.js'

function Checkbox({ item, onToggle }) {
	return (
		<C.Input
			done={item.done}
			type='checkbox'
			onClick={() => onToggle(item.id)}
		/>
	)
}

export default Checkbox
