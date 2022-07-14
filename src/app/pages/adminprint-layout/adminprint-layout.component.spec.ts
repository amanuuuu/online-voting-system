import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprintLayoutComponent } from './adminprint-layout.component';

describe('AdminprintLayoutComponent', () => {
  let component: AdminprintLayoutComponent;
  let fixture: ComponentFixture<AdminprintLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprintLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprintLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
