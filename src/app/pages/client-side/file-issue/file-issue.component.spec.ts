import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileIssueComponent } from './file-issue.component';

describe('FileIssueComponent', () => {
  let component: FileIssueComponent;
  let fixture: ComponentFixture<FileIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
