import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatDuJourComponent } from './plat-du-jour.component';

describe('PlatDuJourComponent', () => {
  let component: PlatDuJourComponent;
  let fixture: ComponentFixture<PlatDuJourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatDuJourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatDuJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
