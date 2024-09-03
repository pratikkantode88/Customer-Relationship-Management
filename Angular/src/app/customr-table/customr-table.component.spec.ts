import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomrTableComponent } from './customr-table.component';

describe('CustomrTableComponent', () => {
  let component: CustomrTableComponent;
  let fixture: ComponentFixture<CustomrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomrTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
