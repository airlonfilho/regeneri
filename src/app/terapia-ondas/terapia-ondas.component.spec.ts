import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaOndasComponent } from './terapia-ondas.component';

describe('TerapiaOndasComponent', () => {
  let component: TerapiaOndasComponent;
  let fixture: ComponentFixture<TerapiaOndasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapiaOndasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiaOndasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
