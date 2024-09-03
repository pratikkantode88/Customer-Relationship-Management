import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFirstNamesComponent } from './get-all-first-names.component';

describe('GetAllFirstNamesComponent', () => {
  let component: GetAllFirstNamesComponent;
  let fixture: ComponentFixture<GetAllFirstNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllFirstNamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllFirstNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
