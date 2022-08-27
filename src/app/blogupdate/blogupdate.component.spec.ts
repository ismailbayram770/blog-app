import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogupdateComponent } from './blogupdate.component';

describe('BlogupdateComponent', () => {
  let component: BlogupdateComponent;
  let fixture: ComponentFixture<BlogupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
