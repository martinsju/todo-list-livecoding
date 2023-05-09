import React from 'react'
import { ListPage } from '../components/ListPage'
import { LoginPage } from '../components/LoginPage'
import { RequireAuth } from '../contexts/Auth/RequireAuth'
import { RequireLogin } from '../contexts/Auth/RequireLogin'
import { CreateUserPage } from '../components/CreateUserPage'

export const routes = {
	list: {
		id: 'list',
		path: '/',
		component: (
			<RequireAuth>
				<ListPage />
			</RequireAuth>
		)
	},
	login: {
		id: 'login',
		path: '/login',
		component: (
			<RequireLogin>
				<LoginPage />
			</RequireLogin>
		)
	},
	signup: {
		id: 'signup',
		path: '/signup',
		component: (
			<RequireLogin>
				<CreateUserPage />
			</RequireLogin>
		)
	}
}
