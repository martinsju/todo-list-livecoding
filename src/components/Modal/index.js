import React from 'react'
import * as C from './styled.js'
import Button from '../Button'

function Modal({ handleDeleteTrue, handleDeleteFalse }) {
	return (
		<C.Container onClick={handleDeleteFalse}>
			<C.ModalArea onClick={(e) => e.stopPropagation()}>
				<label>Are you sure you want to delete this task?</label>
				<C.ButtonArea>
					<Button
						color='#BCF39A'
						hoverColor='#8BC766'
						onClick={handleDeleteTrue}
					>
						Confirm
					</Button>
					<Button
						color='#F47D7D'
						hoverColor='#E05A5A'
						onClick={handleDeleteFalse}
					>
						Cancel
					</Button>
				</C.ButtonArea>
			</C.ModalArea>
		</C.Container>
	)
}

export default Modal
