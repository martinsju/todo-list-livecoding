import Header from './components/Header'
import ListPage from './components/ListPage'
import LoginPage from './components/LoginPage'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='list' element={<ListPage />} />
			</Routes>
		</div>
	)
}

export default App
