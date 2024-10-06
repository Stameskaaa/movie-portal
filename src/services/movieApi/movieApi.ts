import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apikey = process.env.REACT_APP_API_KEY2;

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', `${apikey}`);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: (string) =>
        `/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${string}`,
    }),
    getPopularMovie: builder.query({
      query: (page) => `/v2.2/films/collections?type=TOP_POPULAR_ALL&page=${page}`,
    }),
    getTopMovie: builder.query({
      query: (page) => `/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=${page}`,
    }),
    getPersons: builder.query({
      query: ({ page, name }) => `/v1/persons?name=${name}&page=${page}`,
    }),
    getPremiers: builder.query({
      query: ({ year, moth }) => `/v2.2/films/premieres?year=${year}&month=${moth}`,
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetPopularMovieQuery,
  useGetTopMovieQuery,
  useGetPersonsQuery,
  useGetPremiersQuery,
} = movieApi;
