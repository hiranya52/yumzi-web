import { Component } from '@angular/core';
import { HeroComponent } from '../../Components/hero-component/hero-component';
import { FlavorBombsSection } from "../../Components/flavor-bombs-section/flavor-bombs-section";
import { BrandStorySection } from "../../Components/brand-story-section/brand-story-section";
import { NewsletterCTASection } from "../../Components/newsletter-ctasection/newsletter-ctasection";
import { Footer } from "../../Components/footer/footer";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, FlavorBombsSection, BrandStorySection, NewsletterCTASection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
