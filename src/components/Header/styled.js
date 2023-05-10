import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
	height: 130px;
	background-color: #232328;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 45px;
`

const Todo = styled.h1`
	color: ${(props) => (props.color ? props.color : '#f7f7f7')};
	font-size: 40px;
	font-weight: 700;
	margin: 0;
`

const List = styled.h1`
	color: #f7f7f7;
	font-size: 40px;
	font-weight: 200;
	margin-left: 10px;
	margin: 0;
`

const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
`
const SectionLeft = styled.section`
	//TODO tirar esse
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
`

const SectionRight = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
`

const Paragraph = styled.p`
	color: #f7f7f7;
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: 200;
	text-align: center;
	margin: 0;
`

export {
	Container,
	Todo,
	List,
	StyledLink,
	SectionLeft,
	SectionRight,
	Paragraph
}
