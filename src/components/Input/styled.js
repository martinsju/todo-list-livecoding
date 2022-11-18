import styled from 'styled-components'

const Input = styled.input`
	width: 100%;
	padding: 15px 20px;
	background-color: #2d2d32;
	color: #f7f7f7;
	font-size: 16px;
	border: none;
	outline: none;
	border-radius: 5px;
	box-sizing: border-box;

	::placeholder {
		color: #a0a0a0;
	}

	:focus {
		box-shadow: inset 0px 0px 0px 2px #bd93f9;
	}
`

export { Input }
