import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrailsDashboardComponent } from './my-trails-dashboard.component';

describe('MyTrailsDashboardComponent', () => {
  let component: MyTrailsDashboardComponent;
  let fixture: ComponentFixture<MyTrailsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTrailsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTrailsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
