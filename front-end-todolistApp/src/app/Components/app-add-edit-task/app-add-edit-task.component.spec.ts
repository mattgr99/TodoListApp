import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddEditTaskComponent } from './app-add-edit-task.component';

describe('AppAddEditTaskComponent', () => {
  let component: AppAddEditTaskComponent;
  let fixture: ComponentFixture<AppAddEditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddEditTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
