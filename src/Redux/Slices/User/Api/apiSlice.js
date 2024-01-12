import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = sessionStorage.getItem("token");

export const userApi = createApi({
  reducerPath: "user",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://binge-browser.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    //Login
    bookSlot: builder.mutation({
      query: (data) => ({
        url: `slots/book-slots/${data.theaterUid}`,
        method: "POST",
        body: data,
      }),
    }),

    //getSlotByDate
    getSlotByDate: builder.query({
      query: (data) => ({
        url: `slots/${data}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useBookSlotMutation,
  useGetSlotByDateQuery,
} = userApi;
