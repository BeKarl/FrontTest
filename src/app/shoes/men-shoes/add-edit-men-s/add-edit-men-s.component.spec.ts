import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMenSComponent } from './add-edit-men-s.component';

describe('AddEditMenSComponent', () => {
  let component: AddEditMenSComponent;
  let fixture: ComponentFixture<AddEditMenSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMenSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMenSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
