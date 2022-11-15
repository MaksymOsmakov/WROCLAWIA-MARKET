import React, { useState } from 'react';
import { useActions } from '../hooks/actions';
import { IClothes } from '../types/serverResponse';
import { TiHeartOutline, TiShoppingCart, TiHeart } from "react-icons/ti";
import { useAppSelector } from '../hooks/redux';


interface ItemCardProps {
	item: IClothes
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
	const { addToBasket, addToFav, removeFromFav } = useActions()
	const { items } = useAppSelector(state => state.favorites)
	const [isFav, setIsFav] = useState(items.includes(item))//from ls

	const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		addToFav(item)
		setIsFav(true)
	}

	const removeFromFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		removeFromFav(item)
		setIsFav(false)
	}

	return (
		<div className=' relative w-[230px] h-[320px] overflow-hidden grid grid-row-2 cursor-pointer mb-7'>
			<div className='flex flex-col text-center items-center'>
				{!isFav &&
					<button className='absolute right-0' onClick={addToFavorites} >
						<TiHeartOutline className='w-[30px] h-[30px]' />
					</button>
				}
				{isFav &&
					<button className='absolute right-0' onClick={removeFromFavorites} >
						<TiHeart className='w-[30px] h-[30px]' />
					</button>
				}
				<div className='w-[150px] h-[200px] '>
					{!item.image
						?
						<div><img src={require('../assets/loader.gif')} alt="" /></div>
						:
						<img src={item.image} alt="item" className='' />
					}
				</div>
				<div className='mt-6 w-full h-[50px] overflow-hidden'>
					{item.title}
				</div>
			</div>

			<div className='flex flex-row justify-between text-center items-center'>
				<p className='text-2xl '>{item.price}</p>
				<button onClick={() => addToBasket(item)}><TiShoppingCart className='w-[30px] h-[30px]' /></button>
			</div>
		</div>
	);
};

export default ItemCard;