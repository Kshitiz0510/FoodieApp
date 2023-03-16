import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTabComponent } from './fav-tab.component';

describe('FavTabComponent', () => {
  let component: FavTabComponent;
  let fixture: ComponentFixture<FavTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
