import { IClothes } from './../types/serverResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const marketApi = createApi({
	reducerPath: 'market/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://fakestoreapi.com/'
	}),
	refetchOnFocus: true,
	refetchOnReconnect: true,
	endpoints: build => ({
		getItems: build.query<IClothes[], number>({
			query: (limit: number) => ({
				url: `products`,
				params: {
					limit: limit
				}
			}),
			transformResponse: (response: IClothes[]) => response
		})
	})
})

export const { useGetItemsQuery } = marketApi