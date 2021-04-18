import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWCComponent } from './add-edit-w-c.component';

describe('AddEditWCComponent', () => {
  let component: AddEditWCComponent;
  let fixture: ComponentFixture<AddEditWCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
