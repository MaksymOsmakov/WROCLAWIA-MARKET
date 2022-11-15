import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import { TiThMenuOutline } from "react-icons/ti";

interface BurgerMenuProps {

}


const BurgerMenu: React.FC<BurgerMenuProps> = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);





	return (
		<div className='z-50'>
			<TiThMenuOutline className='cursor-pointer h-[30px] w-[50px] ' onClick={() => setShowMenu(!showMenu)} />
			{showMenu &&
				<div>
					<button className='z-20 top-2 left-[550px]  bg-white border border-sky-500 pt-5 pb-5 pl-7 pr-7 rounded-full absolute hover:bg-sky-500 transition-all ' onClick={() => setShowMenu(!showMenu)}>X</button>
					<div onClick={() => setShowMenu(!showMenu)} className='h-[100vh] w-full absolute bg-black left-0 top-0 opacity-30'></div>
					<div className=' bg-white p-9 w-[35%] h-full absolute opacity-100 left-0 top-0 shadow-2xl shadow-black'>



						<nav className='flex flex-col mt-5'>
							<NavLink to='/' className=' mb-2 text-2xl cursor-pointer hover:text-sky-500 transition-all decoration-slice' onClick={() => setShowMenu(!showMenu)} >Home</NavLink>
							<NavLink to='about' className=' mb-2 text-2xl cursor-pointer hover:text-sky-500 transition-all decoration-slice' onClick={() => setShowMenu(!showMenu)} >About us</NavLink>
							<NavLink to='blog' className=' mb-2 text-2xl cursor-pointer hover:text-sky-500 transition-all decoration-slice' onClick={() => setShowMenu(!showMenu)} >Blog</NavLink>
						</nav>

						<div className='mt-12'>
							<div className=''><a href="tel:+481234567">+7 (48) 123-45-67</a></div>
						</div>
						<address>Sucha 1, 50-086 Wrocław</address>
						<div className='mt-4'>
							<GoogleMap />
						</div>

						<div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default BurgerMenu;