import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMenCComponent } from './add-edit-men-c.component';

describe('AddEditMenCComponent', () => {
  let component: AddEditMenCComponent;
  let fixture: ComponentFixture<AddEditMenCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMenCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMenCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
