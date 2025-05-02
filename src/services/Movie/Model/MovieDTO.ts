//apagar depois os elementos desnecessários

interface CardMovie {
  genres: string[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_data: string;
  runtime: number;
  title: string;
  vote_average: number;
}

export interface MovieDTO {
  data: CardMovie[];
  next_page_url: string;
  page: number;
  per_page: number;
  previous_page_url: string;
  total_items: number;
  total_pages: number;
}
