import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentCardComponent } from './restaurent-card.component';

describe('RestaurentCardComponent', () => {
  let component: RestaurentCardComponent;
  let fixture: ComponentFixture<RestaurentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
