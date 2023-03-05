import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().player?.token;
      if (token) {
        headers.set(
          "Authorization",
          `Bearer ${token}`,
          "Content-Type",
          "application/json"
          // import.meta.env.VITE_SPOTIFY_RAPID_API_KEY,
          // "X-RapidAPI-Host",
          // import.meta.env.VITE_GEO_API_KEY
        );
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    get50Album: builder.query({
      query: () =>
        "/search?query=remaster%25200track%3Adoxy%2520artist%3AMiles%25200Davis&type=album&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=50",
    }),
    getAlbum: builder.query({ query: () => "/albums" }),
    getSingleTrak: builder.query({ query: (id) => `/tracks?ids=${id}` }),
    getCurrtentPlaying: builder.query({
      query: () => `/me/player/currently-playing`,
    }),
  }),
});
export const { useGet50AlbumQuery, useGetAlbumQuery, useGetSingleTrakQuery } =
  spotifyApi;
