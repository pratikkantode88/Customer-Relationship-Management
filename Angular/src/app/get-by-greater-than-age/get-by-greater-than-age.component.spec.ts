import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByGreaterThanAgeComponent } from './get-by-greater-than-age.component';

describe('GetByGreaterThanAgeComponent', () => {
  let component: GetByGreaterThanAgeComponent;
  let fixture: ComponentFixture<GetByGreaterThanAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetByGreaterThanAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByGreaterThanAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
