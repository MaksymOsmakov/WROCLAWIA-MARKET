import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation'
interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = () => {






	return (
		<div>
			<header className=' bg-white shadow-xl h-[60px] w-full '>
				<Navigation />
			</header>

			<main className=' mt-0 mb-0 ml-auto mr-auto'>
				<Outlet />
			</main>

			<footer>

			</footer>
		</div>
	);
};

export default Layout;