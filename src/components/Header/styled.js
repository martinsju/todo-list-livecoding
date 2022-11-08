import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
	height: 130px;
	background-color: #232328;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 45px;
`

export const Todo = styled.h1`
	color: ${(props) => (props.color ? props.color : '#f7f7f7')};
	font-size: 40px;
	font-weight: 700;
	margin: 0;
`

export const List = styled.h1`
	color: #f7f7f7;
	font-size: 40px;
	font-weight: 200;
	margin-left: 10px;
	margin: 0;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
`

export const Section = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
`

export const Logout = styled.a`
	color: #f7f7f7;
	font-size: 16px;
	font-weight: 200;
	text-decoration: underline;
	margin: 0;
	cursor: pointer;

	:hover {
		color: #bd93f9;
	}
`
