import { TestBed } from '@angular/core/testing';

import { ProdottiListService } from './prodotti-list.service';

describe('ProdottiListService', () => {
  let service: ProdottiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
