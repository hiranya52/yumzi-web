import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStorySection } from './brand-story-section';

describe('BrandStorySection', () => {
  let component: BrandStorySection;
  let fixture: ComponentFixture<BrandStorySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandStorySection],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandStorySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
