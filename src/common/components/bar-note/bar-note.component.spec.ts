import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarNoteComponent } from './bar-note.component';

describe('BarNoteComponent', () => {
  let component: BarNoteComponent;
  let fixture: ComponentFixture<BarNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarNoteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve montar o componente', () => {
    expect(component).toBeTruthy();
  });
});
