import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbasicsTwoComponent } from './angularbasics-two.component';

describe('AngularbasicsTwoComponent', () => {
  let component: AngularbasicsTwoComponent;
  let fixture: ComponentFixture<AngularbasicsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularbasicsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularbasicsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
