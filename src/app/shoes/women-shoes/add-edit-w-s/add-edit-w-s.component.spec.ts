import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWSComponent } from './add-edit-w-s.component';

describe('AddEditWSComponent', () => {
  let component: AddEditWSComponent;
  let fixture: ComponentFixture<AddEditWSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
