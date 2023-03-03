import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify81.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SPOTIFY_RAPID_API_KEY,
        "X-RapidAPI-Host",
        import.meta.env.VITE_GEO_API_KEY
      );
    },
  }),
  endpoints: (builder) => ({
    getTwoHundresSong: builder.query({ query: () => "top_200_tracks" }),
    getSingleTrak: builder.query({ query: (id) => `tracks?ids=${id}` }),
  }),
});
export const { useGetTwoHundresSongQuery, useGetSingleTrakQuery } = spotifyApi;
