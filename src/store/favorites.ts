import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IClothes } from "../types/serverResponse"
const LS_FAV_KEY = 'rfk'


interface FavState {
	items: IClothes[]
}
const initialState: FavState = {
	items: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const favSlice = createSlice({
	name: 'fav',
	initialState,
	reducers: {
		addToFav(state, action: PayloadAction<IClothes>) {
			state.items?.push(action.payload)
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.items))
		},
		removeFromFav(state, action: PayloadAction<IClothes>) {
			state.items = state.items.filter(i => JSON.stringify(i) !== JSON.stringify(action.payload))
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.items))
		}
	}
})



export const favActions = favSlice.actions
export const favReduces = favSlice.reducer