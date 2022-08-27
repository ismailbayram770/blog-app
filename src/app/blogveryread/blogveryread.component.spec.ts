import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogveryreadComponent } from './blogveryread.component';

describe('BlogveryreadComponent', () => {
  let component: BlogveryreadComponent;
  let fixture: ComponentFixture<BlogveryreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogveryreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogveryreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
