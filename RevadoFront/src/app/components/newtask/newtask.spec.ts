import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtaskComponent } from './newtask';

describe('NewtaskComponent', () => {
  let component: NewtaskComponent;
  let fixture: ComponentFixture<NewtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtaskComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
