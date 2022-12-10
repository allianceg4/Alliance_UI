import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryDashboardComponent } from './treasury-dashboard.component';

describe('TreasuryDashboardComponent', () => {
  let component: TreasuryDashboardComponent;
  let fixture: ComponentFixture<TreasuryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasuryDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreasuryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
