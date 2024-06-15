import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForPropertiesComponent } from './ng-for-properties.component';

describe('NgForPropertiesComponent', () => {
  let component: NgForPropertiesComponent;
  let fixture: ComponentFixture<NgForPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
