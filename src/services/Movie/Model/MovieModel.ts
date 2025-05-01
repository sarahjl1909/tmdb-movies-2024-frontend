interface CardMovie {
  id: number;
  image_url: string;
  title: string;
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
