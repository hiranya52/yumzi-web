import { Component } from '@angular/core';
import { HeroComponent } from '../../Components/hero-component/hero-component';


@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
