import styled from 'styled-components'

export const Container = styled.div`
	height: 130px;
	background-color: #232328;
	display: flex;
	justify-content: center;
`

export const Header1 = styled.h1`
	color: ${(props) => (props.color ? props.color : '#f7f7f7')};
	font-size: 40px;
	font-weight: 700;
`

export const Header2 = styled.h1`
	color: #f7f7f7;
	font-size: 40px;
	font-weight: 200;
	margin-left: 10px;
`
