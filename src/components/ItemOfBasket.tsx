import React from 'react';
import { useActions } from '../hooks/actions';
import { IClothes } from '../types/serverResponse';
import { TiTrash } from "react-icons/ti";

interface ItemOfBasketProps {
	item: IClothes
}



const ItemOfBasket: React.FC<ItemOfBasketProps> = ({ item }) => {

	const { removeFromBasket } = useActions()
	const removeFromBasketReducer = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		removeFromBasket(item)
	}



	return (
		<div className='flex flex-row justify-between items-center mb-5'>
			<img className='w-[50px] h-[50]' src={item.image} alt="logo" />
			<span className='flex flex-wrap w-[50%]'>
				{item.title}
			</span>
			<span className='left-0 p-5 font-bold text-xl'>
				{item.price}
			</span>
			<button onClick={removeFromBasketReducer}><TiTrash className='cursor-pointer h-[30px] w-[50px] hover:text-red-500 transition-all'/></button>
		</div>

	);
};

export default ItemOfBasket;