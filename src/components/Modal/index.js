import React from 'react'
import * as C from './styled.js'

function Modal({ handleDeleteTrue, handleDeleteFalse }) {
	return (
		<C.Container>
			<C.ModalArea>
				<label>Are you sure you want to delete this task?</label>
				<C.ButtonArea>
					<C.Button color='green' onClick={handleDeleteTrue}>
						Confirm
					</C.Button>
					<C.Button color='red' onClick={handleDeleteFalse}>
						Cancel
					</C.Button>
				</C.ButtonArea>
			</C.ModalArea>
		</C.Container>
	)
}

export default Modal
