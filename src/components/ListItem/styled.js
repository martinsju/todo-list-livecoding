import styled from 'styled-components'

export const Item = styled.li(
	({ done }) => `
	font-weight: 100;
	font-size: 16px;
	padding: 5px 0 5px 0;
	gap: 10px;
	list-style: none;
	display: flex;
	align-items: center;

	&:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}

	input {
		width: 18px;
		height: 18px;
		-webkit-appearance: none;
		appearance: none;
		background-color: #ededed;
		color: currentColor;
		border-radius: 0;
		display: grid;
		place-content: center;
	}

	input[type='checkbox']::before {
		content: '';
		width: 0.65em;
		height: 0.65em;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em #0f0e18;
	}

	input[type='checkbox']:checked::before {
		transform: scale(1.4);
	}

	label {
		text-decoration: ${done ? 'line-through' : 'initial'}
	}

	svg {
		margin-left: auto;
	}
`
)
