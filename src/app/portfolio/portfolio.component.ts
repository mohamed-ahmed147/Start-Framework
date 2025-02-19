import { Component } from '@angular/core';
import { StarLineblackComponent } from '../star-lineblack/star-lineblack.component';

@Component({
  selector: 'app-portfolio',
  imports: [StarLineblackComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  items: string[] = [
    'poert1.png',
    'port2.png',
    'port3.png',
    'poert1.png',
    'port2.png',
    'port3.png',
  ];
  hasImage: boolean = false;
  imageNum!: number;

  get imagesel(): string {
    return this.items[this.imageNum];
  }

  selectedimage(image: string, num: number): void {
    this.hasImage = true;
    this.imageNum = num;
  }

  hideImage(): void {
    this.hasImage = false;
  }

  next(): void {
    if (this.imageNum < this.items.length - 1) {
      this.imageNum++;
    } else {
      this.imageNum = 0;
    }
  }

  prev(): void {
    if (this.imageNum > 0) {
      this.imageNum--;
    } else {
      this.imageNum = this.items.length - 1;
    }
  }
}
