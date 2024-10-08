import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmByID } from '../../types/apiTypes';
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
      query: ({
        order = 'RATING',
        type = 'ALL',
        ratingFrom = '0',
        ratingTo = '10',
        yearTo = '3000',
        keyword = '',
        genre,
      }) => {
        let resultStr = `/v2.2/films?order=${order}&type=${type}&ratingFrom=${ratingFrom}&ratingTo=${ratingTo}&yearFrom=1000&yearTo=${yearTo}&keyword=${keyword}`;
        if (!!genre && genre !== 'ALL') resultStr += `&genres=${genre}`;
        return resultStr;
      },
    }),
    getPopularMovie: builder.query({
      query: (page) => `/v2.2/films/collections?type=TOP_POPULAR_ALL&page=${page}`,
    }),
    getTopMovie: builder.query({
      query: (page) => `/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=${page}`,
    }),
    getCollections: builder.query({
      query: ({ type, page }) => {
        // console.log(type, page);
        return `/v2.2/films/collections?type=${type}&page=${page}`;
      },
    }),
    getPersons: builder.query({
      query: ({ page, name }) => `/v1/persons?name=${name}&page=${page}`,
    }),
    getPremiers: builder.query({
      query: ({ year, moth }) => `/v2.2/films/premieres?year=${year}&month=${moth}`,
    }),
    getBaseInfo: builder.query({
      query: ({ id }) => `/v2.2/films/${id}`,
    }),
    getMoreBaseInfo: builder.query<FilmByID[], { ids: string[] }>({
      queryFn: async ({ ids }, _queryApi, _extraOptions, fetchWithBQ) => {
        try {
          const requests = ids.map((id) => fetchWithBQ(`/v2.2/films/${id}`));
          const responses = await Promise.all(requests);

          const data = responses.map((response) => {
            if ('error' in response) {
              throw new Error('One or more requests failed');
            }
            return response.data as FilmByID;
          });

          return { data };
        } catch (error: any) {
          return { error: error.message || 'Unknown error' };
        }
      },
    }),
  }),
});

export const {
  useGetMoreBaseInfoQuery,
  useGetCollectionsQuery,
  useGetFilmsQuery,
  useGetPopularMovieQuery,
  useGetTopMovieQuery,
  useGetPersonsQuery,
  useGetPremiersQuery,
  useGetBaseInfoQuery,
} = movieApi;
