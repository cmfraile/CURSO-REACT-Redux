import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//https://redux-toolkit.js.org/rtk-query/api/createApi#extraoptions

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            keepUnusedDataFor:10
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`,
            keepUnusedDataFor:10
        }),
    })
})

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;

