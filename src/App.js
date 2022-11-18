import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { routes } from './config/routes'

export function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route path={routes.list.path} element={routes.list.component} />
				<Route path={routes.login.path} element={routes.login.component} />
			</Routes>

			{/* <Routes>
				{Object.values(routes).map((route) => (
					<Route key={route.path} path={route.path} element={route.component} />
				))}
			</Routes> */}
		</div>
	)
}
