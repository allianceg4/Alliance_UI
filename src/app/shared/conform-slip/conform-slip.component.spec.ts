import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformSlipComponent } from './conform-slip.component';

describe('ConformSlipComponent', () => {
  let component: ConformSlipComponent;
  let fixture: ComponentFixture<ConformSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformSlipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
