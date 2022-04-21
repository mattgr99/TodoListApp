import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddEditFolderComponent } from './app-add-edit-folder.component';

describe('AppAddEditFolderComponent', () => {
  let component: AppAddEditFolderComponent;
  let fixture: ComponentFixture<AppAddEditFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddEditFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddEditFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
