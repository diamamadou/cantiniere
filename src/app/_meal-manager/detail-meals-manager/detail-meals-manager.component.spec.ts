import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMealsManagerComponent } from './detail-meals-manager.component';

describe('DetailMealsManagerComponent', () => {
  let component: DetailMealsManagerComponent;
  let fixture: ComponentFixture<DetailMealsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMealsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMealsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
