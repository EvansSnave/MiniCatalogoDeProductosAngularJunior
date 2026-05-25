import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedImage } from './optimized-image';

describe('OptimizedImage', () => {
  let component: OptimizedImage;
  let fixture: ComponentFixture<OptimizedImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizedImage],
    }).compileComponents();

    fixture = TestBed.createComponent(OptimizedImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
