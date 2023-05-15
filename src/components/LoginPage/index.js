import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../config/routes.js'
import { AuthContext } from '../../contexts/Auth/AuthContext.js'
import { Button } from '../Button/index.js'
import { Input } from '../Input/index.js'
import * as C from './styled.js'

export function LoginPage() {
	const auth = useContext(AuthContext)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	async function handleLogin() {
		console.log('email: ', email)
		console.log('pw: ', password)
		if (email && password) {
			const isLogged = await auth.signin(email, password) //true || false
			// console.log('logged: ', isLogged)
			if (isLogged) {
				navigate(routes.list.path)
			}
		} else {
			alert('Preencha todos os campos')
		}
	}

	function handleInputEmail(e) {
		setEmail(e.target.value)
	}

	function handleInputPassword(e) {
		setPassword(e.target.value)
	}

	function handleClick() {
		navigate(routes.signup.path)
	}

	return (
		<C.Container>
			<C.Title>Faça o login</C.Title>
			<C.InputContainer>
				<C.InputArea>
					<C.Label>Seu e-mail</C.Label>
					<Input
						placeholder='Digite seu melhor e-mail'
						type='text'
						onChange={handleInputEmail}
					/>
				</C.InputArea>
				<C.InputArea>
					<C.Label>Sua senha</C.Label>
					<Input
						placeholder='Digite sua senha'
						type='password'
						onChange={handleInputPassword}
					/>
				</C.InputArea>
			</C.InputContainer>
			<Button onClick={handleLogin}>Login</Button>
			<C.FooterTextSection>
				<C.Paragraph>Não tem uma conta?</C.Paragraph>
				<C.Link onClick={handleClick}>Cadastre-se agora</C.Link>
			</C.FooterTextSection>
		</C.Container>
	)
}
