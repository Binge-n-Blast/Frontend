import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = sessionStorage.getItem("token");

export const adminApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://binge-browser.onrender.com/api/v1/admin/",
  }),
  tagTypes: ["Cakes"],
  endpoints: (builder) => ({
    //Login
    adminLogin: builder.mutation({
      query: (login) => ({
        url: "auth/login",
        method: "POST",
        body: login,
      }),
    }),

    //Theaters
    getTheaters: builder.query({
      query: () => ({
        url: "theater/list",
        method: "GET",
      }),
    }),

    //Cakes
    getCakes: builder.query({
      query: () => ({
        url: "extra-items/CAKE",
        method: "GET",
      }),
      providesTags: ["Cakes"],
    }),
    getCake: builder.query({
      query: (id) => ({
        url: `extra-items/${id}`,
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
      query: (id) => ({
        url: `extra-items/${id}`,
        method: "PATCH",
        body: cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Cakes"],
    }),

    //Decorations
    getDecorations: builder.query({
      query: () => ({
        url: "extra-items/DECORATION",
        method: "GET",
      }),
      providesTags: ["Decorations"],
    }),
    addDecoration: builder.mutation({
      query: (cake) => ({
        url: "extra-items/DECORATION",
        method: "POST",
        body: cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Decorations"],
    }),
    deleteDecoration: builder.mutation({
      query: (id) => ({
        url: `extra-items/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Decorations"],
    }),

    //Add-ons
    getAddons: builder.query({
      query: () => ({
        url: "extra-items/ADD_ON",
        method: "GET",
      }),
      providesTags: ["Addon"],
    }),
    addAddon: builder.mutation({
      query: (cake) => ({
        url: "extra-items/ADD_ON",
        method: "POST",
        body: cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Addon"],
    }),
    deleteAddon: builder.mutation({
      query: (id) => ({
        url: `extra-items/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Addon"],
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetTheatersQuery,
  useGetCakesQuery,
  useAddCakeMutation,
  useDeleteCakeMutation,
  useEditCakeMutation,
  useGetDecorationsQuery,
  useAddDecorationMutation,
  useDeleteDecorationMutation,
  useGetAddonsQuery,
  useAddAddonMutation,
  useDeleteAddonMutation,
} = adminApi;
