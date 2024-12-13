import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplantsComponent } from './addplants.component';

describe('AddplantsComponent', () => {
  let component: AddplantsComponent;
  let fixture: ComponentFixture<AddplantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddplantsComponent]
    });
    fixture = TestBed.createComponent(AddplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
