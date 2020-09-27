import { Pagination } from './../shared/models/pagination.model';

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Catalog {
  paginationInfo: Pagination;
  photosResult: Photo[];
}
