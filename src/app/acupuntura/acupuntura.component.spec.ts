import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunturaComponent } from './acupuntura.component';

describe('AcupunturaComponent', () => {
  let component: AcupunturaComponent;
  let fixture: ComponentFixture<AcupunturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcupunturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcupunturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
