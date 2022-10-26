import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	max-width: 100%;
	max-height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background-color: rgba(0, 0, 0, 0.3);
	padding-top: 150px;
	margin: 0;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`

export const ModalArea = styled.div`
	width: 380px;
	max-width: 70%;
	height: 140px;
	padding: 25px 20px;
	box-sizing: border-box;
	background-color: #2d2d32;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 20px;
	color: #f7f7f7;
	font-size: 16px;
`
export const ButtonArea = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`

export const Button = styled.button`
	background-color: ${(props) => (props.color ? props.color : '#201F2D')};
	color: #fafafa;
	border: none;
	border-radius: 3px;
	padding: 10px 20px;
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
`
