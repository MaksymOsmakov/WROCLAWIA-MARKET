import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Basket from './components/Basket';
import Favorites from './components/Favorites';
import { AuthProvider } from './hoc/AuthProvider';
import RequireAuth from './hoc/RequireAuth';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/about' element={<About />} />

					<Route path='/basket' element={
						<RequireAuth>
							<Basket />
						</RequireAuth>
					} />
					<Route path='/favorites' element={
						<RequireAuth>
							<Favorites />
						</RequireAuth>
					} />

				</Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
