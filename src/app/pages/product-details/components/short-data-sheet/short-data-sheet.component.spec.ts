import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortDataSheetComponent } from './short-data-sheet.component';

describe('ShortDataSheetComponent', () => {
  let component: ShortDataSheetComponent;
  let fixture: ComponentFixture<ShortDataSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShortDataSheetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortDataSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve montar o componente', () => {
    expect(component).toBeTruthy();
  });
});
