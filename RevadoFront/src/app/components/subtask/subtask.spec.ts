import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskComponent } from './subtask';

describe('Subtask', () => {
  let component: SubtaskComponent;
  let fixture: ComponentFixture<SubtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtaskComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
