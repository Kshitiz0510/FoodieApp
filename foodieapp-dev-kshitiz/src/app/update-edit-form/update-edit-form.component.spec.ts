import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEditFormComponent } from './update-edit-form.component';

describe('UpdateEditFormComponent', () => {
  let component: UpdateEditFormComponent;
  let fixture: ComponentFixture<UpdateEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
