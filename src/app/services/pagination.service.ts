import { PaginationKey } from './../enums/pagination-key.enum';
import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private activePaginations: Array<Pagination> = [];

  constructor() { }

  public currentPagination(key: PaginationKey) {
    return this.activePaginations.find(a => a.key === key);
  }

  public setPagination(value: Pagination) {
    this.activePaginations.push(value);
  }

  public updatePagination(value: Pagination) {
    const index = this.activePaginations.findIndex(a => a.key === value.key)
    this.activePaginations[index] = value;
  }

  public createPagination(key: PaginationKey) {
    const pagination = this.getPaginatioObject(10, 0, key);
    this.setPagination(pagination);
  }

  public hasPagination(key) {
    return  this.activePaginations.filter(a => a.key === key).length > 0;
  }

  public getPaginatioObject(limit: number, offset: number, key: PaginationKey) {
    return { limit, offset, key } as Pagination;
  }
}
