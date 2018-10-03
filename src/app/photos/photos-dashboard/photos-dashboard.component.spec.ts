import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDashboardComponent } from './photos-dashboard.component';

describe('PhotosDashboardComponent', () => {
  let component: PhotosDashboardComponent;
  let fixture: ComponentFixture<PhotosDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
