import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentDetailsComponent } from './restaurent-details.component';

describe('RestaurentDetailsComponent', () => {
  let component: RestaurentDetailsComponent;
  let fixture: ComponentFixture<RestaurentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
