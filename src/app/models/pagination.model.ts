import { PaginationKey } from '../enums/pagination-key.enum';

export interface Pagination {
  offset: number;
  limit: number;
  key: PaginationKey;
}
