import React from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import { TiShoppingCart, TiHeartOutline, TiUserOutline } from "react-icons/ti";
import { useAppSelector } from '../hooks/redux';

interface navigationProps { }

const Navigation: React.FC<navigationProps> = () => {
	const { items } = useAppSelector(state => state.favorites)
	const { items: basket } = useAppSelector(state => state.basket)

	return (
		<div>
			<div className="flex justify-between flex-row p-4 w-[1100px] mt-0 mb-0 ml-auto mr-auto">

				<BurgerMenu />

				<div className='flex'>
					<span>WROCLAVIA MARKER</span>
					<a href="https://fakestoreapi.com/" target='_blank' rel="noreferrer">
						<img src="https://fakestoreapi.com/icons/logo.png" alt="logo" className=' ml-2 mt-[-5px] h-9 w-9' />
					</a>
				</div>

				<div className='flex justify-between w-[15%]'>
					<div>
						<NavLink to='login'><TiUserOutline className='cursor-pointer h-[30px] w-[50px]' /></NavLink>
					</div>
					<div className='flex'>
						<NavLink to='favorites' ><TiHeartOutline className='cursor-pointer h-[30px] w-[50px] relative' /></NavLink>
						{items.length > 0 &&
							<span className='absolute top-[9px] ml-[28px] border rounded-full bg-black text-white pl-2 pr-2 pb-1 text-xs'>{items.length}</span>
						}
					</div>
					<div className='flex'>
						<NavLink to='basket'><TiShoppingCart className='cursor-pointer h-[30px] w-[50px]' /></NavLink>
						{basket.length > 0 &&
							<span className='absolute top-[9px] ml-[28px] border rounded-full bg-black text-white pl-2 pr-2 pb-1 text-xs'>{basket.length}</span>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
