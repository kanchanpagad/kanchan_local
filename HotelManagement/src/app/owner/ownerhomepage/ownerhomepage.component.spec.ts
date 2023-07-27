import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhomepageComponent } from './ownerhomepage.component';

describe('OwnerhomepageComponent', () => {
  let component: OwnerhomepageComponent;
  let fixture: ComponentFixture<OwnerhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerhomepageComponent]
    });
    fixture = TestBed.createComponent(OwnerhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
