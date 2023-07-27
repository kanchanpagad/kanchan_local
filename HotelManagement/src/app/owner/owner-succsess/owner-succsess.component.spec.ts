import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSuccsessComponent } from './owner-succsess.component';

describe('OwnerSuccsessComponent', () => {
  let component: OwnerSuccsessComponent;
  let fixture: ComponentFixture<OwnerSuccsessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSuccsessComponent]
    });
    fixture = TestBed.createComponent(OwnerSuccsessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
