import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikesDashboardComponent } from './hikes-dashboard.component';

describe('HikesDashboardComponent', () => {
  let component: HikesDashboardComponent;
  let fixture: ComponentFixture<HikesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
