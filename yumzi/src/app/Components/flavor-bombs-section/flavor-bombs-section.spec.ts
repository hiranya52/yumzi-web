import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorBombsSection } from './flavor-bombs-section';

describe('FlavorBombsSection', () => {
  let component: FlavorBombsSection;
  let fixture: ComponentFixture<FlavorBombsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlavorBombsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FlavorBombsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
