export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
}

// export interface MovieDetails extends Movie {
//   runtime: number;
//   genres: {
//     id: number;
//     name: string;
//   }[];
// }

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
}

export interface MovieDetails extends Movie {
  runtime: number;
  genres: Genre[];
  status: string;
  tagline: string;
  homepage: string;
  production_companies: ProductionCompany[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}
