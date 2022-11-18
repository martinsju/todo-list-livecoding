import React from 'react'
import { Button } from '../Button'
import * as C from './styled.js'

export function Modal({ handleDeleteTrue, handleDeleteFalse }) {
	return (
		<C.Container onClick={handleDeleteFalse}>
			<C.ModalArea onClick={(e) => e.stopPropagation()}>
				<C.Label>Are you sure you want to delete this task?</C.Label>
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
