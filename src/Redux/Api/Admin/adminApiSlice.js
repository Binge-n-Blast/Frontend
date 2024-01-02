import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = sessionStorage.getItem("token");

export const adminApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
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
      query: (data) => ({
        url: `extra-items/${data.uid}`,
        method: "PATCH",
        body: data,
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
    editDecoration: builder.mutation({
      query: (data) => ({
        url: `extra-items/${data.uid}`,
        method: "PATCH",
        body: data,
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
    editAddon: builder.mutation({
      query: (data) => ({
        url: `extra-items/${data.uid}`,
        method: "PATCH",
        body: data,
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
  useEditDecorationMutation,

  useGetAddonsQuery,
  useAddAddonMutation,
  useDeleteAddonMutation,
  useEditAddonMutation,
} = adminApi;
