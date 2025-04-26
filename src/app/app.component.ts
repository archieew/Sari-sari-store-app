import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_data_binding';
  clientName = "Archie Custodio";// property
  appliedCSS = 'green'; //style
  notAppliedCSS = false;
  myColor = 'red';
  clickCount = 0;
  itemCounts: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  
  clickMe(itemIndex: number): void {
    this.itemCounts[itemIndex]++;
    this.showPopup(`You added an item from your cart. Item ${itemIndex + 1}`);
  }

  resetClickCount(itemIndex: number): void {
    this.itemCounts[itemIndex] = 0;
    this.showPopup(`You removed all items from Item ${itemIndex + 1}`);
  }

  private showPopup(message: string): void {
    alert(message);
  }
  getTotalItemCount(): number {
    return this.itemCounts.reduce((total, count) => total + count, 0);
  }
}


 /* clickMe() {
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount = 0;
  }
} 
*/
