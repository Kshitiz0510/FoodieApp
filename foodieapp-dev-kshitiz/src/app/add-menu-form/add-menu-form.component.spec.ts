import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuFormComponent } from './add-menu-form.component';

describe('AddMenuFormComponent', () => {
  let component: AddMenuFormComponent;
  let fixture: ComponentFixture<AddMenuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
