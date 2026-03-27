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
    name: "Mixed Dry Fruits",
    price: "5.40",
    description: "A premium blend of raisins, cashews, almonds, and dried berries, offering a naturally sweet, crunchy, and nutritious snack.",
    color: "#9333ea",
    bgColor: "#f3e8ff",
    blobColor: "#e9d5ff",
    image: "https://images.unsplash.com/photo-1606925797303-1a4b6cbb6a7d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dried Mango Slices",
    price: "6.00",
    description: "Naturally sweet and chewy mango slices, carefully dried to preserve their tropical flavor and vibrant taste.",
    color: "#f59e0b",
    bgColor: "#fef3c7",
    blobColor: "#fde68a",
    image: "https://images.unsplash.com/photo-1590080877777-3d58c1c76c53?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dried Apple Rings",
    price: "4.20",
    description: "Crispy and lightly sweet apple rings, dried to perfection for a healthy and refreshing snack.",
    color: "#16a34a",
    bgColor: "#dcfce7",
    blobColor: "#bbf7d0",
    image: "https://images.unsplash.com/photo-1579618219820-9fdd3eaa3f39?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dried Pineapple Chunks",
    price: "2.90",
    description: "Tangy and sweet pineapple chunks with a chewy texture, delivering a tropical burst in every bite.",
    color: "#ca8a04",
    bgColor: "#fef9c3",
    blobColor: "#fef08a",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80"
  }
];

selectedDryFruit = this.dryFruits[0];

selectDryFruit(dryFruit: DryFruit) {
  this.selectedDryFruit = dryFruit;
}
}
