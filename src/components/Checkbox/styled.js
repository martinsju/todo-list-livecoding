import styled from 'styled-components'

const Input = styled.input`
	width: 18px;
	height: 18px;
	min-width: 18px;
	min-height: 18px;
	background-color: #f7f7f7;
	color: currentColor;
	display: grid;
	place-content: center;
	-webkit-appearance: none;
	appearance: none;
	border-radius: 3px;

	::before {
		content: '';
		width: 0.6em;
		height: 0.6em;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em #956dcd;
		border-radius: 1px;
	}

	:checked::before {
		transform: scale(1.4);
	}
`

export { Input }
