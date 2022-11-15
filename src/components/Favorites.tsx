import React	 from 'react';
import { useAppSelector } from '../hooks/redux';
import ItemCard from './ItemCard';

interface FavoritesProps {

}

const Favorites: React.FC<FavoritesProps> = () => {
	const { items } = useAppSelector(state => state.favorites)


	return (
		<div className='grid grid-cols-4 gap-5 w-[1100px] mt-9 mb-0 ml-auto mr-auto'>
			{items.length < 1 && <p className='text-center text-xl'> Wish list is empty...</p>}
			{items && items.map(i => <ItemCard item={i} />)}
		</div>
	);
};

export default Favorites;