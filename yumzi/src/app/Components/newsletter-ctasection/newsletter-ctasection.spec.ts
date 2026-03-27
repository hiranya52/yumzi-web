import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterCTASection } from './newsletter-ctasection';

describe('NewsletterCTASection', () => {
  let component: NewsletterCTASection;
  let fixture: ComponentFixture<NewsletterCTASection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterCTASection],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterCTASection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
