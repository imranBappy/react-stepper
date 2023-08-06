import { apiSlice } from '../api/apiSlice';


const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Course endpoints
        getCourses: builder.query({
            query: () => '/courses',
            providesTags: ['Course'],
        }),
        getCourse: builder.query({
            query: (id) => `/courses/${id}`,
            providesTags: ['Course'],
        }),
        buyCourse: builder.mutation({
            query: (id) => ({
                url: `/courses/${id}/buy`,
                method: 'POST',
            }),
        }),
    })

})

export default courseApi;
export const { useGetCoursesQuery, useGetCourseQuery, useBuyCourseMutation } = courseApi;