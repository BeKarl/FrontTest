import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMTComponent } from './add-edit-m-t.component';

describe('AddEditMTComponent', () => {
  let component: AddEditMTComponent;
  let fixture: ComponentFixture<AddEditMTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
