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
      price: '3.50',
      description:
        'Sweet and slightly tangy dried strawberry slices, packed with fruity flavor and a delightful chewy texture.',
      color: '#e11d48',
      bgColor: '#ffe4e6',
      blobColor: '#fecdd3',
      image: 'Stawberry.png',
    },
    {
      name: 'Mango Crunch',
      price: '6.00',
      description:
        'Naturally sweet and chewy mango slices, carefully dried to preserve their tropical flavor and vibrant taste.',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      blobColor: '#fde68a',
      image: 'Mango.png',
    },
    // {
    //   name: "Apple Rings",
    //   price: "4.20",
    //   description: "Crispy and lightly sweet apple rings, dried to perfection for a healthy and refreshing snack.",
    //   color: "#16a34a",
    //   bgColor: "#dcfce7",
    //   blobColor: "#bbf7d0",
    //   image: "Apple.png"
    // },
    {
      name: 'Pineapple Chunks',
      price: '2.90',
      description:
        'Tangy and sweet pineapple chunks with a chewy texture, delivering a tropical burst in every bite.',
      color: '#ca8a04',
      bgColor: '#fef9c3',
      blobColor: '#fef08a',
      image: 'Pineapple.png',
    },
    {
      name: 'Mixed Fruits',
      price: '5.40',
      description:
        'A premium blend of raisins, cashews, almonds, and dried berries, offering a naturally sweet, crunchy, and nutritious snack.',
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
