import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMenuJourComponent } from './detail-menu-jour.component';

describe('DetailMenuJourComponent', () => {
  let component: DetailMenuJourComponent;
  let fixture: ComponentFixture<DetailMenuJourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMenuJourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMenuJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
