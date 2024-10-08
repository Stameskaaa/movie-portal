export interface MovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Error?: string;
}

export interface SearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchResponse {
  Search: SearchResult[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface Query {
  type: string;
  search: string;
}

export interface AuthState {
  authorized: boolean;
  userData: UserState | null;
}

export interface CurrentUser {
  name: string;
  password: string;
}

export interface UserState {
  name: string;
  password: string;
  favorites: string[];
}
export type UserList = UserFavorite[];

export interface UserFavorite {
  name: string;
  favorites: string[];
}

interface Country {
  name: string;
  id: number;
}

interface Genre {
  genre: string;
}

export interface FilmData {
  countries: Country[];
  coverUrl: string | null;
  description: string;
  genres: Genre[];
  imdbId: string;
  kinopoiskId: number;
  logoUrl: string | null;
  nameEn: string | null;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingAgeLimits: string;
  ratingImdb: number | null;
  ratingKinopoisk: number | null;
  type: 'FILM' | 'SERIES';
  year: number;
}

export interface MovieResponse {
  total: number;
  totalPages: number;
  items: FilmData[];
}

export interface SearchString {
  order?: string;
  type?: string;
  ratingFrom?: string;
  ratingTo?: string;
  yearTo?: string;
  keyword?: string;
  genre?: string;
}

export interface FilterDataItem {
  id: string;
  ru: string;
  eng: string;
}

export type FilterDataList = FilterDataItem[];

export type TypeKey = 'yearTo' | 'ratingTo' | 'ratingFrom' | 'type' | 'order' | 'genre';

export interface FilmByID {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: Array<{
    country: string;
  }>;
  genres: Array<{
    genre: string;
  }>;
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}
