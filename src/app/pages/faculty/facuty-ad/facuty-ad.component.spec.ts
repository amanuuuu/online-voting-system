import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacutyAdComponent } from './facuty-ad.component';

describe('FacutyAdComponent', () => {
  let component: FacutyAdComponent;
  let fixture: ComponentFixture<FacutyAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacutyAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacutyAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
