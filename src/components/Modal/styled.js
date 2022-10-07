import styled from 'styled-components'

export const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background-color: rgba(0, 0, 0, 0.3);
	padding-top: 100px;
	margin: 0;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`

export const ModalArea = styled.div`
	width: 50%;
	max-width: 300px;
	height: 150px;
	padding: 25px 20px;
	box-sizing: border-box;
	background-color: #fafafa;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 20px;
	color: #000;
`
export const ButtonArea = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 25px;
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
