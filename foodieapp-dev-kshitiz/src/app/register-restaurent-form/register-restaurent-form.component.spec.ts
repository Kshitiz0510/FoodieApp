import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRestaurentFormComponent } from './register-restaurent-form.component';

describe('RegisterRestaurentFormComponent', () => {
  let component: RegisterRestaurentFormComponent;
  let fixture: ComponentFixture<RegisterRestaurentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRestaurentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRestaurentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
