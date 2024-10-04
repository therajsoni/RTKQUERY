import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const myApi = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3000/"
    }),
    endpoints : (builder) => ({
    getPosts :  builder.query({
        query : () => "posts"
    }),
    })
})

// export const {getPosts} = myApi.endpoints; 
export const {useGetPostQuery} = myApi