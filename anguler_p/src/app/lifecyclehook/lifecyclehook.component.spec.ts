import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehookComponent } from './lifecyclehook.component';

describe('LifecyclehookComponent', () => {
  let component: LifecyclehookComponent;
  let fixture: ComponentFixture<LifecyclehookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecyclehookComponent]
    });
    fixture = TestBed.createComponent(LifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
