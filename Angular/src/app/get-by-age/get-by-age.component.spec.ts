import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByAgeComponent } from './get-by-age.component';

describe('GetByAgeComponent', () => {
  let component: GetByAgeComponent;
  let fixture: ComponentFixture<GetByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetByAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
