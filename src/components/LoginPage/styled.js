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

export { Container, Title, Label, InputArea, InputContainer }
