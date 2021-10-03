import { TestBed } from '@angular/core/testing';
import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService<any, any, any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('deve injetar o serviço', () => {
    expect(service).toBeTruthy();
  });
});
