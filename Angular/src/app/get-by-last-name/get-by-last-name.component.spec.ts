import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByLastNameComponent } from './get-by-last-name.component';

describe('GetByLastNameComponent', () => {
  let component: GetByLastNameComponent;
  let fixture: ComponentFixture<GetByLastNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetByLastNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByLastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
