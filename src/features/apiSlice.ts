import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IStory} from "../types/IStory";
import {IComment} from "../types/IComment";

export const mainApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: ' https://hacker-news.firebaseio.com/v0/'}),
    endpoints: (builder) => ({
        getNewsIds: builder.query<number[], void>({
            query: () => `newstories.json`,
        }),
        getNewById: builder.query<IStory, number>({
            query: (storyId: number) => `item/${storyId}.json`,
        }),
        getCommentById: builder.query<IComment, number>({
            query: (commentId: number) => `item/${commentId}.json`,
        }),
    }),
})

export const {
    useGetNewsIdsQuery,
    useGetNewByIdQuery,
    useGetCommentByIdQuery,
} = mainApi