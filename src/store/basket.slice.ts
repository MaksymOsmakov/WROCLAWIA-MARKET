import { IClothes } from './../types/serverResponse';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const LS_BASKET_KEY = 'rbk'


interface BasketState {
	items: IClothes[]
}
const initialState: BasketState = {
	items: JSON.parse(localStorage.getItem(LS_BASKET_KEY) ?? '[]')
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket(state, action: PayloadAction<IClothes>) {
			if (JSON.stringify(state.items).includes(JSON.stringify(action.payload))) {
				const item = action.payload
				const newItem = {
					id: item.id * Math.random(),
					category: item.category,
					description: item.description,
					image: item.image,
					price: item.price,
					rating: item.rating,
					title: item.title
				}
				state.items?.push(newItem)
			} else {
				state.items?.push(action.payload)
			}
			localStorage.setItem(LS_BASKET_KEY, JSON.stringify(state.items))
		},
		removeFromBasket(state, action: PayloadAction<IClothes>) {
			state.items = state.items.filter(i => JSON.stringify(i) !== JSON.stringify(action.payload))
			localStorage.setItem(LS_BASKET_KEY, JSON.stringify(state.items))
		}
	}
})


export const basketActions = basketSlice.actions
export const basketReduces = basketSlice.reducer