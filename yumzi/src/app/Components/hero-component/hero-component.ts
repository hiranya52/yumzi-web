import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  imports: [CommonModule],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {
  dryFruits: DryFruit[] = [
  {
    name: 'Strawberry Slices',
    color: '#e11d48',
    bgColor: '#ffe4e6',
    blobColor: '#fecdd3',
    image: 'Stawberry.png',
  },
  {
    name: 'Mango Crunch',
    color: '#f59e0b',
    bgColor: '#fef3c7',
    blobColor: '#fde68a',
    image: 'Mango.png',
  },
  // {
  //   name: "Apple Rings",
  //   color: "#16a34a",
  //   bgColor: "#dcfce7",
  //   blobColor: "#bbf7d0",
  //   image: "Apple.png"
  // },
  {
    name: 'Pineapple Chunks',
    color: '#ca8a04',
    bgColor: '#fef9c3',
    blobColor: '#fef08a',
    image: 'Pineapple.png',
  },
  {
    name: 'Mixed Fruits',
    color: '#9333ea',
    bgColor: '#f3e8ff',
    blobColor: '#e9d5ff',
    image: 'Mixed Fruit.png',
  },
];
  selectedDryFruit = this.dryFruits[0];

  selectDryFruit(dryFruit: DryFruit) {
    this.selectedDryFruit = dryFruit;
  }
}
