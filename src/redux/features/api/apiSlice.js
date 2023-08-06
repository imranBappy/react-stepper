import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            let token = getState()
            token = token.auth.accessToken;
            if (token) {
                headers.set("authorization", `${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Course', 'User', 'Auth'],
    endpoints: (builder) => ({}),
})

export default apiSlice;