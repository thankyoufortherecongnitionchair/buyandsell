import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystuffComponent } from './mystuff.component';

describe('MystuffComponent', () => {
  let component: MystuffComponent;
  let fixture: ComponentFixture<MystuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MystuffComponent]
    });
    fixture = TestBed.createComponent(MystuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
