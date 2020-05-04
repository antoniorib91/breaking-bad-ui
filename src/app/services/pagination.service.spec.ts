import { TestBed } from '@angular/core/testing';

import { PaginationService } from './pagination.service';
import { PaginationKey } from '../enums/pagination-key.enum';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaginationService
      ]
    });
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#currentPagination =>', () => {

    it('Should return current pagination from Pagination key...', () => {
      const pagination = service.getPaginatioObject(10, 0, PaginationKey.CHARACTERS);
      service.setPagination(pagination);
      const subject = service.currentPagination(PaginationKey.CHARACTERS);
      expect(subject.key).toEqual(PaginationKey.CHARACTERS);
    });

    describe('When not find pagination =>', () => {

      it('Should return undefined...', () => {
        expect(service.currentPagination(PaginationKey.CHARACTERS)).toBeUndefined();
      });
    });

  });

  describe('#setPagination => ', () => {

    it('Should set the pagination with the pagination key...', () => {
      const pagination = service.getPaginatioObject(10, 0, PaginationKey.CHARACTERS);
      service.setPagination(pagination);
      const subject = service.currentPagination(PaginationKey.CHARACTERS);
      expect(subject.key).toEqual(PaginationKey.CHARACTERS);
    });
  });


  describe('#updatePagination => ', () => {

    it('Should update the pagination value...', () => {
      const pagination = service.getPaginatioObject(10, 0, PaginationKey.CHARACTERS);
      service.setPagination(pagination);
      pagination.offset = 30;
      service.updatePagination(pagination);
      const subject = service.currentPagination(PaginationKey.CHARACTERS);
      expect(subject.key).toEqual(pagination.key);
      expect(subject.limit).toEqual(10);
      expect(subject.offset).toEqual(30);
    });

  });


  describe('#createPagination => ', () => {

    it('Should create and set pagination value...', () => {
      service.createPagination(PaginationKey.CHARACTERS);
      const subject = service.currentPagination(PaginationKey.CHARACTERS);
      expect(subject.key).toEqual(PaginationKey.CHARACTERS);
      expect(subject.limit).toEqual(10);
      expect(subject.offset).toEqual(0);
    });
  });


  describe('#hasPagination => ', () => {

    it('Should return true or false if have pagination...', () => {
      service.createPagination(PaginationKey.CHARACTERS);
      expect(service.currentPagination(PaginationKey.CHARACTERS)).toBeTruthy();
    });

    describe('Whe not found pagination', () => {

      it('Should return false...', () => {
        expect(service.currentPagination(PaginationKey.CHARACTERS)).toBeFalsy();
      });

    });

  });

  describe('#getPaginatioObject => ', () => {
    it('Should return a new pagination object with informed params...', () => {
      const subject = service.getPaginatioObject(30, 30, PaginationKey.CHARACTERS);
      expect(subject.key).toEqual(PaginationKey.CHARACTERS);
      expect(subject.limit).toEqual(30);
      expect(subject.offset).toEqual(30);
      expect(typeof subject.limit).toEqual('number');
      expect(typeof subject.offset).toEqual('number');
    });

  });
});
