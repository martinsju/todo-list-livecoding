import React from 'react'
import * as C from './styled.js'

function ListItem({ item }) {
	return (
		<C.Container>
			<li>
				#{item.id} - {item.name}
			</li>
		</C.Container>
	)
}

export default ListItem
