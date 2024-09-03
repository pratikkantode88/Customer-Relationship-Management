import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByLessThanAgeComponent } from './get-by-less-than-age.component';

describe('GetByLessThanAgeComponent', () => {
  let component: GetByLessThanAgeComponent;
  let fixture: ComponentFixture<GetByLessThanAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetByLessThanAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByLessThanAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
