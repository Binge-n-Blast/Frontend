import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = sessionStorage.getItem("token");

export const adminApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://binge-browser.onrender.com/api/v1/admin/",
  }),
  tagTypes: ["Cakes"],
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (login) => ({
        url: "auth/login",
        method: "POST",
        body: login,
      }),
    }),

    getTheaters: builder.query({
      query: () => ({
        url: "theater/list",
        method: "GET",
      }),
    }),

    getCakes: builder.query({
      query: () => ({
        url: "extra-items/CAKE",
        method: "GET",
      }),
      providesTags: ["Cakes"],
    }),
    getCake: builder.query({
      query: (accessToken) => ({
        url: "extra-items/CAKE",
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
    }),
    addCake: builder.mutation({
      query: (cake) => ({
        url: "extra-items/CAKE",
        method: "POST",
        body: cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Cakes"],
    }),
    deleteCake: builder.mutation({
      query: (id) => ({
        url: `extra-items/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Cakes"],
    }),
    editCake: builder.mutation({
      query: (cake) => ({
        url: `extra-items/update`,
        method: "PUT",
        body:cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Cakes"],
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetTheatersQuery,
  useGetCakesQuery,
  useAddCakeMutation,
  useDeleteCakeMutation,
  useEditCakeMutation
} = adminApi;
