import styled from 'styled-components'

export const Button = styled.button`
	background-color: ${({ color }) => color ?? '#f7f7f7'};
	display: flex;
	align-items: center;
	gap: 10px;
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	color: #000;
	white-space: nowrap;
	border: none;
	border-radius: 5px;
	padding: 15px 20px;

	:hover {
		background-color: ${({ hoverColor }) => hoverColor ?? '#bd93f9'};
	}

	& > svg {
		width: 20px;
		height: 20px;
	}
`
