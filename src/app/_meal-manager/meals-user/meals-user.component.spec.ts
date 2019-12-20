import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsUserComponent } from './meals-user.component';

describe('MealsUserComponent', () => {
  let component: MealsUserComponent;
  let fixture: ComponentFixture<MealsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
