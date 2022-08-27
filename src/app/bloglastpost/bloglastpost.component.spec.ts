import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglastpostComponent } from './bloglastpost.component';

describe('BloglastpostComponent', () => {
  let component: BloglastpostComponent;
  let fixture: ComponentFixture<BloglastpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloglastpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloglastpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
