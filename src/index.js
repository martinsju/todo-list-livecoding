import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { AuthProvider } from './contexts/Auth/AuthContext'
import GlobalStyles from './globalStyles.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<GlobalStyles />
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</>
)
