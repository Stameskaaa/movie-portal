import { SearchResponse, MovieDetail } from './../types/apiTypes';

const key = process.env.REACT_APP_API_KEY;

const fetchRandomMovie = async () => {
  const randomId = `tt${Math.floor(1000000 + Math.random() * 500000)}`;
  const data = await fetchMovies({ type: 'i', search: randomId });
  return data;
}; // Поиск рандомных

const fetchInitialMovies = async () => {
  const data = await fetchMovies({ type: 's', search: 'deadpool' });

  return data as SearchResponse;
}; // Поиск для главной страницы

const fetchMovies = async ({
  type = '',
  search = '',
  arrayId,
}: { type?: string; search?: string; arrayId?: string[] } = {}): Promise<
  SearchResponse | MovieDetail
> => {
  // type = s t i

  if (!search) {
    throw new Error('Enter data'); //если это поиск по строке а не по массиву айдди
  }

  let request = `http://www.omdbapi.com/?apikey=${key}`;
  request += `&${type}=${search}`;

  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  } // Обрабатываем ошибки не по причине HTTP

  const data = await response.json();

  if (data.Response === 'False') {
    throw new Error(data.Error);
  } // Дефолтные ошибки обработаю выше для отрисовки сообщения ошибки

  return data; // Если ищем по айди или тайтлу получаем другой ответ более детальный с другим типом
};

const fetchMoviesByArr = async (arrayId: string[] | undefined) => {
  if (!arrayId) {
    return [];
  }
  const response = await Promise.allSettled(
    arrayId.map((id) => fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}`)),
  );

  const fulfilledReponses: PromiseFulfilledResult<Response>[] = response.filter(
    (movie): movie is PromiseFulfilledResult<Response> => movie.status === 'fulfilled',
  );

  const data: MovieDetail[] = await Promise.all(
    fulfilledReponses.map((movie) => movie.value.json()),
  );

  return data;
};

export { fetchRandomMovie, fetchInitialMovies, fetchMovies, fetchMoviesByArr };
