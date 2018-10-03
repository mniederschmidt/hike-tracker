import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsDashboardComponent } from './trails-dashboard.component';

describe('TrailsDashboardComponent', () => {
  let component: TrailsDashboardComponent;
  let fixture: ComponentFixture<TrailsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
