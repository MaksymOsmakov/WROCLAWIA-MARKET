import React from 'react';
import AdCarousel from '../components/AdCarousel';
import ItemCard from '../components/ItemCard';
import { useGetItemsQuery } from '../store/marketApi';


interface HomeProps {

}


const Home: React.FC<HomeProps> = () => {
	const { isError, isLoading, data } = useGetItemsQuery(0, {
		refetchOnFocus: true,
		refetchOnReconnect: true,
	})


	return (
		<div>
			<div className='mt-5 mb-5 h-[100%] w-full overflow-hidden '>
				<AdCarousel />
			</div>

			{isLoading && <div className='flex justify-center w-full'><img src={require('../assets/loader.gif')} alt="Loading..." /></div>}
			{isError && <div>Something went wrong...</div>}

			<div className='grid grid-cols-4 gap-5 w-[1100px] mt-9 mb-0 ml-auto mr-auto'>
				{data?.map(item => <ItemCard item={item} key={item.id} />)}
			</div>
		</div>
	);
};

export default Home;