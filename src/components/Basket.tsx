import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { IClothes } from '../types/serverResponse';
import ItemOfBasket from './ItemOfBasket';
import { TiArrowBack } from "react-icons/ti";


interface BasketProps {

}

const Basket: React.FC<BasketProps> = () => {

	const { items } = useAppSelector(state => state.basket)
	const navigate = useNavigate();
	const [promo, setPromo] = useState<string>('');
	const [style, setStyle] = useState<string>('2px solid rgb(255, 139, 110)');
	const [promoDiscount, setPromoDiscount] = useState<number>(0);
	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPromo(e.target.value)
	}
	let myStyle = {
		border: style
	}
	useEffect(() => {
		if (promo.length > 5) {
			setStyle('2px solid rgb(144, 255, 110)')
			setPromoDiscount(-15)
		}
		else {
			setPromoDiscount(0)
			setStyle('2px solid rgb(255, 139, 110)')
		}
	}, [promo]);

	const calculatePrice = (items: IClothes[]): number => {
		if (items === undefined) {
			return 0;
		} else if (items.length === 0) {
			return 0;
		} else {
			return items.reduce((acc, curr) => { return acc + curr.price; }, promoDiscount);
		}
	}




	return (
		<div className='w-[1100px] mt-2 mb-0 ml-auto mr-auto'>
			<div className='mb-2'>
				<button onClick={() => navigate(-1)} className=' flex items-center border border-sky-500  p-2 mt-2 mb-2 hover:bg-sky-500 hover:text-white transition-all'><TiArrowBack /> Back</button>
			</div>
			<div className='grid grid-cols-[4fr,2fr] gap-7 '>
				<div>
					{items.length < 1 && <p className='text-xl text-center'>Basket is empty...</p>}
					{items?.map(i => <ItemOfBasket key={i.id} item={i} />)}
				</div>
				<div className='flex flex-col'>
					<div style={myStyle} className='h-fit bg-slate-100 flex flex-col text-center items-center'>
						<span className='text-xl mt-2'>Promo code</span>
						<input type="text" className='mb-4 mt-2 w-[80%] h-[40px] p-2' placeholder='promo code' value={promo} onChange={inputChange} />
					</div>
					<div className='h-fit bg-slate-100 mt-5 flex flex-col'>
						<span className='font-bold text-xl ml-2 '>Total price:  {Math.ceil(calculatePrice(items))} </span>
						<button className=' border border-sky-500  p-2 mt-2 hover:bg-sky-500 transition-all' onClick={() => alert('it is fake')}>go to pay</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Basket;