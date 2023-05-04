import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Story} from "../types/Story";

export const mainApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: ' https://hacker-news.firebaseio.com/v0/'}),
    endpoints: (builder) => ({
        getNewsIds: builder.query<number[], void>({
            query: (name) => `newstories.json`,
        }),
        getNewById: builder.query<Story, number>({
            query: (itemId: number) => `item1/${itemId}.json`,
        }),
    }),
})

export const {
    useGetNewsIdsQuery,
    useGetNewByIdQuery
} = mainApi