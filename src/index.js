import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './globalStyles.js'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/Auth/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
)

reportWebVitals()
