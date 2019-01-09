import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatchEmpdetailsComponent } from './fatch-empdetails.component';

describe('FatchEmpdetailsComponent', () => {
  let component: FatchEmpdetailsComponent;
  let fixture: ComponentFixture<FatchEmpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatchEmpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatchEmpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
