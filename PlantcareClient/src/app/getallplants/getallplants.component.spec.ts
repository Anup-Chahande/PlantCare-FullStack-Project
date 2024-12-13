import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallplantsComponent } from './getallplants.component';

describe('GetallplantsComponent', () => {
  let component: GetallplantsComponent;
  let fixture: ComponentFixture<GetallplantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallplantsComponent]
    });
    fixture = TestBed.createComponent(GetallplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
