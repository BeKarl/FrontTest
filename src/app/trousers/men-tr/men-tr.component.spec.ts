import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenTrComponent } from './men-tr.component';

describe('MenTrComponent', () => {
  let component: MenTrComponent;
  let fixture: ComponentFixture<MenTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenTrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
