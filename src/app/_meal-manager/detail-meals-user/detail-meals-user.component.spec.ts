import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMealsUserComponent } from './detail-meals-user.component';

describe('DetailMealsUserComponent', () => {
  let component: DetailMealsUserComponent;
  let fixture: ComponentFixture<DetailMealsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMealsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMealsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
