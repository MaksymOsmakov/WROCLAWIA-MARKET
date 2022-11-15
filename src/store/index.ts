import { favReduces } from './favorites';

import { basketReduces } from './basket.slice';
import { marketApi } from './marketApi';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
	reducer: {
		[marketApi.reducerPath]: marketApi.reducer,
		basket: basketReduces,
		favorites: favReduces
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(marketApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>