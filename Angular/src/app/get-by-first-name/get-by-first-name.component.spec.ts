import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByFirstNameComponent } from './get-by-first-name.component';

describe('GetByFirstNameComponent', () => {
  let component: GetByFirstNameComponent;
  let fixture: ComponentFixture<GetByFirstNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetByFirstNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
