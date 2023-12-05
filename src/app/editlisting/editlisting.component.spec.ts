import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistingComponent } from './editlisting.component';

describe('EditlistingComponent', () => {
  let component: EditlistingComponent;
  let fixture: ComponentFixture<EditlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditlistingComponent]
    });
    fixture = TestBed.createComponent(EditlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
