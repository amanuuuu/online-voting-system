import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacutyViewComponent } from './facuty-view.component';

describe('FacutyViewComponent', () => {
  let component: FacutyViewComponent;
  let fixture: ComponentFixture<FacutyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacutyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacutyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
