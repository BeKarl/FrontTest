import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWTComponent } from './add-edit-w-t.component';

describe('AddEditWTComponent', () => {
  let component: AddEditWTComponent;
  let fixture: ComponentFixture<AddEditWTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
