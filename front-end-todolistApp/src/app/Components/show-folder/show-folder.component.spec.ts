import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFolderComponent } from './show-folder.component';

describe('ShowFolderComponent', () => {
  let component: ShowFolderComponent;
  let fixture: ComponentFixture<ShowFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
