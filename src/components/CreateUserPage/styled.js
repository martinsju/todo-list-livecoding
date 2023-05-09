import styled from 'styled-components'

const Container = styled.div`
	width: 618px;
	max-width: 70%;
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin: 0 auto;
	padding-top: 56px;
`

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const InputArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 12px;
`

const Title = styled.h2`
	font-size: 24px;
	text-align: center;
	margin: 0;
`

const Label = styled.label`
	font-size: 16px;
`
const FooterTextSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

const Paragraph = styled.p`
	font-size: 12px;
	text-align: center;
	margin: 0;
`

const Link = styled.button`
	text-decoration: underline;
	font-size: 12px;
	color: #f7f7f7;
	font-family: 'Poppins', sans-serif;
	background: transparent;
	border: none;
	cursor: pointer;
	margin: 0;
	padding: 0;
`

export {
	Container,
	Title,
	Label,
	InputArea,
	InputContainer,
	FooterTextSection,
	Paragraph,
	Link
}
