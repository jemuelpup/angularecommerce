import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramsectionComponent } from './instagramsection.component';

describe('InstagramsectionComponent', () => {
  let component: InstagramsectionComponent;
  let fixture: ComponentFixture<InstagramsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
