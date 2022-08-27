import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfilterComponent } from './blogfilter.component';

describe('BlogfilterComponent', () => {
  let component: BlogfilterComponent;
  let fixture: ComponentFixture<BlogfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
