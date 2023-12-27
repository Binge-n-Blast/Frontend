import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://binge-browser.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (login) => ({
        url: "admin/auth/login",
        method: "POST",
        body: login,
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = adminApi;
