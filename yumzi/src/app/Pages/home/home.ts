import { Component } from '@angular/core';
import { HeroComponent } from '../../Components/hero-component/hero-component';
import { FlavorBombsSection } from "../../Components/flavor-bombs-section/flavor-bombs-section";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, FlavorBombsSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
