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

export interface UserState {
  name: string;
  password: string;
  favorites: string[];
}
