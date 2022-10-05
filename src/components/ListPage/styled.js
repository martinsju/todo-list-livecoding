import styled from 'styled-components'

export const Container = styled.div`
	margin: 0px 25px 0px 25px;
`
export const AddArea = styled.div`
	display: flex;
	margin-bottom: 10px;
`
export const Input = styled.input`
	background: transparent;
	border: 1px solid #373546;
	border-radius: 5px;
	padding: 10px;
	margin-right: 10px;
	width: 100%;
	box-sizing: border-box;
	color: #f7f7f7;
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	outline: none;

	:focus {
		border: 1px solid #cecece;
	}
`
export const Button = styled.button`
	width: 20%;
	border: 1px solid #373546;
	border-radius: 5px;
	font-family: 'Montserrat', sans-serif;
	font-size: 15px;
`
