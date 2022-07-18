import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecivesDemoOneComponent } from './direcives-demo-one.component';

describe('DirecivesDemoOneComponent', () => {
  let component: DirecivesDemoOneComponent;
  let fixture: ComponentFixture<DirecivesDemoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecivesDemoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecivesDemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
