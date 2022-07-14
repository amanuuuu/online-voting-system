import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingAddComponent } from './voting-add.component';

describe('VotingAddComponent', () => {
  let component: VotingAddComponent;
  let fixture: ComponentFixture<VotingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
