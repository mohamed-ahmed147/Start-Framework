import { Component } from '@angular/core';
import { StarLineblackComponent } from '../star-lineblack/star-lineblack.component';

interface Card {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  imports: [StarLineblackComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'], // تم تصحيح `styleUrl` إلى `styleUrls`
})
export class ProductsComponent {
  products: Card[] = [
    {
      id: 1,
      name: 'iPhone 13',
      price: 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'poert1.png',
    },
    {
      id: 2,
      name: 'Realme C55',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'port2.png',
    },
    {
      id: 3,
      name: 'Nokia 21',
      price: 80,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'port3.png',
    },
    {
      id: 4,
      name: 'Huawei P40',
      price: 120,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'port2.png',
    },
    {
      id: 5,
      name: 'Samsung Galaxy S21',
      price: 130,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'port3.png',
    },
    {
      id: 6,
      name: 'Xiaomi Mi 11',
      price: 110,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'poert1.png',
    },
  ];

  recomended :Card[] = [{
    id: 1,
    name: 'Sony XZ2 Compact',
    price: 70,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'port2.png',
  },
  {
    id: 2,
    name: 'OnePlus 9 Pro',
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'port3.png',
  },{
    id: 3,
    name: 'Google Pixel 6',
    price: 90,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'poert1.png',
  }
]
}
