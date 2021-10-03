import { TestBed } from '@angular/core/testing';
import { EventEmitterService } from './event-emitter.service';

describe('EventEmiterService', () => {
  let service: EventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterService);
  });

  it('deve injetar o serviço', () => {
    expect(service).toBeTruthy();
  });
});
