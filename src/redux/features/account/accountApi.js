import { apiSlice } from '../api/apiSlice';


const accountApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Account endpoints
        getAccount: builder.query({
            query: () => '/account',
            providesTags: ['Account'],
        }),
        patchAccount: builder.mutation({
            query: (body) => ({
                url: '/account',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Account'],
        })
    })
})

export default accountApi;
export const { useGetCoursesQuery, useGetCourseQuery, useBuyCourseMutation } = accountApi;