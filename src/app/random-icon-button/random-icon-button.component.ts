import { Component } from '@angular/core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random-icon-button',
  templateUrl: './random-icon-button.component.html',
  styleUrls: ['./random-icon-button.component.css']
})
export class RandomIconButtonComponent {
  public iconToShow: any;
  public isLoading = false;
  public iconVisible = false;
  private delayInProgress = false;

  getRandomIconWithDelay() {
    if (!this.delayInProgress) {
      this.isLoading = true;
      this.iconVisible = false;
      this.delayInProgress = true;
      setTimeout(() => {
        this.generateRandomIcon();
        this.isLoading = false;
        this.iconVisible = true;
        this.delayInProgress = false;
      }, 3000);
    }
  }

  private generateRandomIcon() {
    const allIcons = Object.values(solidIcons);
    const randomIndex = Math.floor(Math.random() * allIcons.length);
    this.iconToShow = allIcons[randomIndex];
  }
}




