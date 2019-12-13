import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsManagerComponent } from './meals-manager.component';

describe('MealsManagerComponent', () => {
  let component: MealsManagerComponent;
  let fixture: ComponentFixture<MealsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
