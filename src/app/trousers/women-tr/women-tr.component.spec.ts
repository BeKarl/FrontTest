import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenTrComponent } from './women-tr.component';

describe('WomenTrComponent', () => {
  let component: WomenTrComponent;
  let fixture: ComponentFixture<WomenTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenTrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
