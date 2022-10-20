import styled from 'styled-components'

const ListItem = styled.li`
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px;
	gap: 10px;

	&:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}

	svg {
		margin-left: auto;
	}
`

const Label = styled.label`
	color: #f7f7f7;
	font-size: 16px;
	font-weight: 100;
	text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`

export { ListItem, Label }
