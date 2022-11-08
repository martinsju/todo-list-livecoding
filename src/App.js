import Header from './components/Header'
import ListPage from './components/ListPage'
import LoginPage from './components/LoginPage'
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from './contexts/Auth/RequireAuth'

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route
					path='/list'
					element={
						<RequireAuth>
							<ListPage />
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
